import image
import meme

from flask import Flask, jsonify
from flask_restful import Api, Resource, reqparse

app = Flask( __name__ )
api = Api( app )

class Meme(Resource):
    def get(self, query, message):
        return {'meme': meme.makememe( message, image.downloadimage(query) ) }, 200
        
api.add_resource(Meme, '/meme/<string:query>/<string:message>')

if __name__ == '__main__':
    app.run(debug=True)