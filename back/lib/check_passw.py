from model.handle_db import HandleDB
from werkzeug.security import check_password_hash


def check_user(username, passw):
  user = HandleDB()
  filter_user = user.get_only(username)
  if filter_user:
    print("PASSWORD ======> ", passw)
    print(filter_user)
    print("####################")
    same_passw = check_password_hash(filter_user[4], passw)
    if same_passw:
      return filter_user
  return None
