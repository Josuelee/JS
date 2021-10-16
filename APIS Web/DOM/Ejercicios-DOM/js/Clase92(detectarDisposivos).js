const d = document  ,
  ua = window.navigator.userAgent;

  export default function detectarDispositivos (detectDevices){
    const $detect =d.getElementById(detectDevices),
    mobile = {
      android: ()=> ua.match(/android/i),
      ios: ()=> ua.match(/iphone|ipad|ipod/i),
      any(){
        return this.android() || this.ios()
      }
    },

    desktop = {
      window: ()=> ua.match(/windows nt/i),
      linux: ()=> ua.match(/linux/i),
      mac: ()=> ua.match(/mac os/i),
      any(){
        return this.window() || this.mac() || this.linux()
      }
    },

    browser = {
      safari: ()=> ua.match(/safari/i),
      opera: ()=> ua.match(/opera|opera mini|OPR/i),
      edge: ()=> ua.match(/edg/i),
      firefox: ()=> ua.match(/firefox/i),
      ie:()=> ua.match(/msie|iemobile/i),
      chrome: ()=> ua.match(/chrome/i),
      any(){
        return this.opera()||
        this.edge()||
        this.firefox()||
        this.ie() ||
        this.chrome()||
        this.safari()
      }

    }

    $detect.innerHTML =
    `<ul>
      <li>User Agent: ${ua}</li>
      <li>Plataforma : ${mobile.any()? mobile.any() : desktop.any()}</li>
      <li>Browser: ${browser.any()}</li>
    </ul>
    `
    

    

    
    


   
  }  

