interface  Ad {
  imagenUrl: string
  title: string
  body: string
  url: string
}

const ALL_ADS: Ad[] = [
  {
    imagenUrl: 'https://avatars.githubusercontent.com/u/47469351?s=400&u=3967350005c463e9ad98ab92c2afbc71e2d51a44&v=4',
    title: 'My primera App',
    body: 'Aplicacion Universitaria para crear un tipo de evoluciones pokemon',
    url: 'https://youtu.be/C2c6DVGP_Qc'
  },
  {
    imagenUrl: 'https://avatars.githubusercontent.com/u/47469351?s=400&u=3967350005c463e9ad98ab92c2afbc71e2d51a44&v=4',
    title: 'Control de Pedidos - DJANGO',
    body: 'Aplicacion de control de pedidos proyecto universitario con DJANGO',
    url: 'https://youtu.be/iMlAfgulAJA'
  },
  {
    imagenUrl: 'https://avatars.githubusercontent.com/u/47469351?s=400&u=3967350005c463e9ad98ab92c2afbc71e2d51a44&v=4',
    title: 'Portafolio con Django',
    body: 'Creacion de portafolio web con plantilla y backend de DJANCO',
    url: 'https://youtu.be/wkGb4C3UJFc'
  },
  {
    imagenUrl: 'https://avatars.githubusercontent.com/u/47469351?s=400&u=3967350005c463e9ad98ab92c2afbc71e2d51a44&v=4',
    title: 'Control de Pedidos - Presentacion',
    body: 'Aplicacion de control de pedidos proyecto universitario con DJANGO Presentacion final al Catedratico',
    url: 'https://youtu.be/L8Z6ylAGbuk'
  },
  {
    imagenUrl: 'https://avatars.githubusercontent.com/u/47469351?s=400&u=3967350005c463e9ad98ab92c2afbc71e2d51a44&v=4',
    title: 'Ecomerce - MR Robot con DJANGO',
    body: 'Aplicacion de ecomerce para un Ciber y tienda de tecnologia, con backen den DJANGO y frontend con el uso de plantillas de Django',
    url: 'https://youtu.be/KdFz-Dj2XKg'
  },
  {
    imagenUrl: 'https://avatars.githubusercontent.com/u/47469351?s=400&u=3967350005c463e9ad98ab92c2afbc71e2d51a44&v=4',
    title: 'Aplicacion para el control de bodegas',
    body: 'Aplicacion estudiantil para el control de bodegas, impresion de reportes backend realizado con DJANGO',
    url: 'https://youtu.be/KdFz-Dj2XKg'
  },
  {
    imagenUrl: 'https://avatars.githubusercontent.com/u/47469351?s=400&u=3967350005c463e9ad98ab92c2afbc71e2d51a44&v=4',
    title: 'KodePrint Aplicacion para presentacion de proyectos',
    body: 'Aplicacion estudiantil para presentar proyectos y los desarrolladores',
    url: 'https://youtu.be/aiH64A8COo8'
  },
]

class Ads {
  private static instance: Ads
  private ads: Ad[]

  private constructor() {
    this.initAds()
  }

  static getInstance () {
    if(!Ads.instance) {
      Ads.instance = new Ads()
    }

    return Ads.instance
  }

  private initAds() {
    this.ads = [...ALL_ADS]
  }

  getAd() {
    if (this.ads.length === 0 ){
      this.initAds()
    }
    return this.ads.pop()
  }
}

export default Ads