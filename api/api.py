import image
import meme

from flask import Flask, jsonify
from flask_restful import Api, Resource, reqparse


app = Flask( __name__ )
api = Api( app )

class Meme(Resource):
    def get(self, message):
        
