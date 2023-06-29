from flask import session, jsonify
from . import blueprint

@blueprint.route('/api/get_user', methods=['GET'])
def get_user():
  result = {
    "email": "james@snakeeyes.com",
  }

  response = {
    "data": result
  }
  
  return jsonify(response)