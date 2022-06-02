from flask import Flask, send_file
from pynput.keyboard import Key, Controller
app = Flask(__name__)

keyboard = Controller()

@app.route('/')
def main():
    return send_file('../public/index.html')

@app.route('/swip/right', methods = ['POST'])
def swipRight():
    tabKey(Key.right)
    return ""

@app.route('/swip/left', methods = ['POST'])
def swipLeft():
    tabKey(Key.left)
    return ""

def tabKey(key):
    keyboard.press(key)
    keyboard.release(key)

if __name__ == '__main__':
    app.run(host="0.0.0.0")
