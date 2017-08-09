import websockets.*;
import codeanticode.syphon.*;

WebsocketClient wsc;
SyphonServer server;

int x, y;

void settings() {
  //Syphon setting
  size(400, 400, P3D);
  PJOGL.profile=1;
}

void setup() {
  //Syphon and websocket setting
  server = new SyphonServer(this, "Processing Syphon");  
  wsc= new WebsocketClient(this, "ws://localhost:8080/socket.io/?EIO=3&transport=websocket");

  //Processing canvas setup
  stateSetup();
}

void draw() {
  //Processing canvas draw
  stateDraw();

  //send screen to syphon
  server.sendScreen();
}

void webSocketEvent(String msg) {
  //println("- " + msg);
  if (msg.length() >= 3) {
    String numKey = msg.substring(0, 2);
    String stringJson = msg.substring(2, msg.length());
    if (numKey.equals("42") ) {
      //String[] result = stringJson.split("\"");
      String[] result2 = stringJson.split(",");
      //String method = result[1];

      String allValues = "";
      for (int i = 1; i < result2.length; i++) {
        if (allValues.equals(""))
          allValues = result2[i];
        else
          allValues = allValues +","+ result2[i];
      }
      allValues = allValues.substring(0, allValues.length()-1); //remove the ] at the end
      JSONObject json = parseJSONObject(allValues);
      x= json.getInt("x");
      y= json.getInt("y");

      //stringJson = "{\"method\":\""+method+"\",\"value\":"+allValues+"}";
      //JSONObject json = parseJSONObject(stringJson);
    }
  }
}