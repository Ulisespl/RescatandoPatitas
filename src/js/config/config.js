let config = 
{
	sys:
	{
		cataAnomalias: null,
		title: 'Ropa de Trabajo',
		short_title: 'Rescatando Patitas',
		author: '2023 - Depto. de T.I.',
		version: ' 1.0.0',
		descrip: "Date la oportunidad de cambiar una vida", 
		external_links:
		{
			support: 
			{
				title: 'Centro de servicios de TI',
			}
		}
	},
	web:
	{
		route: 'Inicio',
		islogin: true,
		user: null,
		rpe: null,
		nombre: null,
		mensajes: [],
	},
	rescatados: [
		{	
			Actividad: 3, 
			Convive: 'Si',
			Descripcion: 'Perrito Rescatado de las garras de la indiferencia', 
			Img: 'images/Bendi1.jpeg',
			Nombre: 'Lala', 
			Protocolo: 'Si',
			Sexo: 'Macho',	
			Tiempo: '2 meses',
			Peso: '12.5 kg', 
			Raza: 'Mestizo', 
			Tamano: 'Grande',
		},
		{
			Actividad: 1, 
			Convive: 'No',
			Descripcion: 'Gatito Rescatada de las garras de la indiferencia', 
			Img: 'images/Bendi2.jpeg',
			Nombre: 'Luna', 
			Protocolo: 'Si',
			Sexo: 'Macho',	
			Tiempo: '9 meses', 
			Peso: '20 kg', 
			Raza: 'Mestizo', 
			Tamano: 'Chico',
		},
		{
			Actividad: 2, 
			Convive: 'Si',
			Descripcion: 'Perrito Rescatado de las garras de la indiferencia', 
			Img: 'images/Bendi3.jpeg',
			Nombre: 'Benita', 
			Protocolo: 'Si',
			Sexo: 'Macho',	
			Tiempo: '1 año y 2 meses', 
			Peso: '3.5 kg', 
			Raza: 'Mestizo', 
			Tamano: 'Chico',
		},
		{
			Actividad: 2, 
			Convive: 'No',
			Descripcion: 'Perrito Rescatado de las garras de la indiferencia', 
			Img: 'images/Dante.jpeg',
			Nombre: 'Dante', 
			Protocolo: 'No',
			Sexo: 'Macho',	
			Tiempo: '4 años y 2 meses', 
			Peso: '21.5 kg', 
			Raza: 'Mestizo', 
			Tamano: 'Mediano',
		},
		{
			Actividad: 5, 
			Convive: 'Si',
			Descripcion: 'Perrito Rescatado de las garras de la indiferencia', 
			Img: 'images/Bruno.jpeg',
			Nombre: 'Bruno', 
			Protocolo: 'Si',
			Sexo: 'Macho',	
			Tiempo: '2 años y 8 meses', 
			Peso: '18.5 kg', 
			Raza: 'Mestizo', 
			Tamano: 'Mediano',
		},
	],


};

export default config;