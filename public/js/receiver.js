socket.on("onsize", function(size) {
    ctx.lineWidth = size;
  });
  socket.on("oncolor", function(color) {
    ctx.strokeStyle = color;
  });
  socket.on("ontoolchange", function(tool) {
    handleToolChange(tool);
  });