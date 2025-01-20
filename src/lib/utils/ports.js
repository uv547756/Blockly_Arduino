export async function getPorts() {
    try{
      const ports = await navigator.serial.getPorts();
      const availPorts = ports.map(port => ({
        path: port.path || 'Unknown'
        info: port.getInfo()
      }));
      return availPorts
    } catch (error){
      console.error("Error getting serial ports: ",error);
      console.log("Defaulting to port /dev/ttyUSB0");
      return [];
    }
}
