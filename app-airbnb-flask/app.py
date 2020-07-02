import requests as req
from flask import Flask, render_template, request, redirect, url_for, flash, session
from api.requests_api import RequestsApi
import random

app = Flask (__name__)
app.secret_key = 'h28whi2jb3usbn3k'

def session_validate():
    if 'login' in session:
        return True
    else:
        return False


def create_session(email, password):
        data = {"email":email, "password": password}
        res = RequestsApi.login_api(data)

        if res["res"]["success"] == True:
            session['login'] = True
            session['username'] = res['res']['data'][0]['name']
            session['userid'] = res['res']['data'][0]['_id'] 

            return True
        else:
            return False


def random_image():
    imglist = ['casa1.jpg','casa2.jpg','casa3.jpg','casa4.jpg','casa5.jpg','casa6.jpg','casa7.jpg','casa8.jpg','casa9.jpg','casa10.jpg',]
    return random.choice(imglist)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/signin')
def signin():
    return render_template('user/sign-in.html')


@app.route('/detailproperty/<id>')
def detailproperty(id):
    try:
        res = RequestsApi.get_one_property_api(id)

        if res["res"]["success"] == True:
            data = res["res"]["data"][0]
            return render_template('property/detail-property.html', property=data)
        else:
            return "Ocurrio un problema al tratar de mostrar el detalle de la propiedad..."
    except:
        return "Error en el servidor"


@app.route('/deleteproperty/<id>')
def deleteproperty(id):
    try:
        if session_validate() == False:
            return redirect(url_for('signin'))

        res = RequestsApi.delete_property_api(id)

        if res["res"]["success"] == True:
            return redirect(url_for('listpropertiesuser'))
        else:
            return "Ocurrio un problema al tratar de eliminar la propiedad..."
    except:
        return "Error en el servidor"


@app.route('/signup')
def signup():
    return render_template('user/sign-up.html')


@app.route('/login', methods = ['POST'])
def login():
    try:
        email = request.form['email']
        password = request.form['password']

        if create_session(email, password):
            return render_template('home.html')
        else:
            return render_template('user/sign-in.html')
    except:
        return "Error en el servidor"


@app.route('/logout')
def logout():
    try:
        if session_validate() == False:
            return redirect(url_for('signin'))

        session.pop('login', None)
        session.pop('username', None)
        session.pop('userid', None)

        return render_template('user/sign-in.html')
    except:
        return "Error en el servidor"


@app.route('/registerproperty')
def registerproperty():
    try:
        if session_validate() == False:
            return redirect(url_for('signin'))
    
        res = RequestsApi.get_all_categories_api()
        data = res['res']['data']

        return render_template('property/add-property.html', categories=data)
    except:
        return "Error al cargar categorias..."


@app.route('/adduser', methods = ['POST'])
def addUser():
    try:
        name = request.form['name']
        last_name = request.form['last_name']
        email = request.form['email']
        password = request.form['password']

        data = {"name":name, "last_name": last_name, "email":email, "password":password}
        res = RequestsApi.save_user_api(data)

        if res["res"]["success"] == True:
            if create_session(email, password):
                return render_template('property/add-property.html')
            else:
                return render_template('user/sign-in.html')
    except:
        return "Error en el servidor"


@app.route('/addproperty', methods = ['POST'])
def addProperty():
    try:
        if session_validate() == False:
            return redirect(url_for('signin'))

        title = request.form['title']
        tp = request.form['type']
        address = request.form['address']
        rooms = request.form['rooms']
        price = request.form['price']
        area = request.form['area']
        image = random_image()
        author = session['userid']

        data = {"title":title, "type":tp, "address":address, "rooms":rooms,"price":price,"area":area,"image":image,"author":author}
        res = RequestsApi.save_property_api(data)

        if res["res"]["success"] == True:
            return redirect(url_for('listpropertiesuser'))
        else:
            return "Ocurrio un problema al tratar de crear una nueva propiedad..."
    except:
        return "Error en el servidor"


@app.route('/listproperties')
def listProperty():
    try:
        res = RequestsApi.get_all_properties_api()
    
        if res["res"]["success"] == True:
            return render_template('property/list-properties.html', properties = res)
        else:
            return "Ocurrio un problema al cargar las propiedades..."
    except:
        return "Error en el servidor"


@app.route('/listpropertiesuser')
def listpropertiesuser():
    try:
        if session_validate() == False:
            return redirect(url_for('signin'))

        id = session['userid']
        res = RequestsApi.get_all_properties_user_api(id)
    
        if res["res"]["success"] == True:
            return render_template('property/list-properties-user.html', properties = res)
        else:
            return "Ocurrio un problema al cargar las propiedades..."
    except:
        return "Error en el servidor"


@app.route('/editproperty')
def editProperty():
    try:
        if session_validate() == False:
            return redirect(url_for('signin'))

        id = request.args.get('id')
        res = RequestsApi.get_one_property_api(id)

        rescategory = RequestsApi.get_all_categories_api()
        data2 = rescategory['res']['data']

        if res["res"]["success"] == True:
            data = res["res"]["data"][0]
            return render_template('property/update-property.html', pro = data, categories=data2)
        else:
            return "Ocurrio un problema al tratar de actualizar la propiedad..."
    except:
         return "Error en el servidor"


@app.route('/updateproperty', methods = ['POST'])
def updateproperty():
    try:
        if session_validate() == False:
            return redirect(url_for('signin'))

        id = request.form['id']
        title = request.form['title']
        tp = request.form['type']
        address = request.form['address']
        rooms = request.form['rooms']
        price = request.form['price']
        area = request.form['area']
        image = request.form['image']
        date = request.form['date']
        author = request.form['author']

        data = {"id":id,"title":title, "type":tp, "address":address, "rooms":rooms,"price":price,"area":area,"image":image,"date":date,"author":author}
        res = RequestsApi.update_property_api(data)

        if res["res"]["success"] == True:
            return redirect(url_for('listpropertiesuser'))
        else:
            return "Ocurrio un problema al tratar de actualizar la propiedad..."
    except:
        return "Error en el servidor"


if __name__ == '__main__':
    app.run(debug=True)

