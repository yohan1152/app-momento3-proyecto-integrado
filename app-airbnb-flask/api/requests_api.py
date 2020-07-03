import requests as req

class RequestsApi():

    #Métodos para User
    @staticmethod
    def login_api(data):
        try:
            response = req.post('http://localhost:3000/api/getuser', json = data)
            return response.json()
        except:
            return response.json()

    @staticmethod
    def save_user_api(data):
        try:
            response = req.post('http://localhost:3000/api/adduser', json = data)
            return response.json()
        except:
            return response.json()

    @staticmethod
    def get_user_exist_api():
        try:
            return True
        except:
            return False
    
    #Métodos para Category
    @staticmethod
    def save_category_api(data):
        try:
            response = req.post('http://localhost:3000/api/addcategory', json = data)
            return response.json()
        except:
            return response.json()

    @staticmethod
    def get_all_categories_api():
        try:
            response = req.get('http://localhost:3000/api/listcategories')
            return response.json()
        except:
            return response.json()

    #Métodos para Property
    @staticmethod
    def save_property_api(data):
        try:
            response = req.post('http://localhost:3000/api/addproperty', json = data)
            return response.json()
        except:
            return response.json()

    @staticmethod
    def get_one_property_api(id):
        try:
            response = req.get('http://localhost:3000/api/getproperties?id='+id)
            return response.json()
        except:
            return response.json()

    @staticmethod
    def get_all_properties_api():
        try:
            response = req.get('http://localhost:3000/api/listproperties')
            return response.json()
        except:
            return response.json()

    @staticmethod
    def get_all_properties_order_api():
        try:
            return True
        except:
            return False

    @staticmethod
    def get_all_properties_user_api(id):
        try:
            response = req.get('http://localhost:3000/api/getpropertiesuser?authorid='+id)
            return response.json()
        except:
            return response.json()

    @staticmethod
    def update_property_api(data):
        try:
            response = req.put('http://localhost:3000/api/updateproperty', json = data)
            return response.json()
        except:
            return response.json()

    @staticmethod
    def delete_property_api(id):
        try:
            response = req.delete('http://localhost:3000/api/deleteproperty?id='+id)
            return response.json()
        except:
            return response.json()