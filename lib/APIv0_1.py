from flask import jsonify

from lib.validator import is_valid
from helper import *
from .. import db

class api():
    schemes = { "connect": {"id": 0},
                "data": {
                    "token": "",
                    "data": {
                        "time": "", # [01]
                        "temperature": 0.0, # [02]
                        "humidity": 0.0, # [02]
                    }
                },
                "error": {
                    "id": 0,
                    "token": "",
                    "level": "",
                    "error": ""
                },
                "alive": {
                    "token": ""
                },
                "view": {
                    "room": 0,
                    "time-from": "", # [01]
                    "time-to": "", # [01]
                    "data": [""]
                },
                "auth": {
                    "user": "",
                    "password": ""
                },
                "command": {
                    "token": "",
                    "command": ""
                }
                }
    def __init__(self,):
        pass
    def call(self, req, data):
        if req in self.schemes and hasattr(self, "api_" + req):
            if is_valid(self.schemes[req], data, True):
                return getattr(self, "api_" + req)(self, data)
            else:
                return jsonify(API_fatal("Invalid request"))
        else:
            return jsonify(API_fatal("Unknown request"))

    def api_connect(self, data):
        if data.id == 0:
            return jsonify(API_error("New device. This API currently does not support creating new devices."))
        return jsonify(API_response(id=data.id))

    def api_data(self, data):
        return jsonify(API_response(msg="THX"))

    def api_error(self, data):
        print("DEVICE has encountered an error. Printing data:")
        print(data)
        return jsonify(API_response(msg="I hear ya."))

    def api_alive(self, data):
        return jsonify(API_response(command="PONG"))

