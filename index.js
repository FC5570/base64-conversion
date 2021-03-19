module.exports = {
  encode(text) {
    if (!text) throw new Error("Specify some text to encode");
    return Buffer.from(text).toString("base64");
  },

  decode(text) {
    if (!text) throw new Error("Specify some text to decode");
    return Buffer.from(text, "base64").toString("ascii");
  },
};
