if(localStorage.getItem('existsmap') == 'yes' || localStorage.getItem('existsmap') == 'yes'){
  console.log('Existe el mapa')
}else{
  console.log('No existe nada');
  localStorage.setItem('existsmap', 'yes');
  localStorage.setItem('styleMap', '/maps/regiones/style.json');
}

function setMapa1(){
  localStorage.setItem('styleMap', '/maps/regiones/style.json');
  location.reload();
}

function setMapa2(){
  localStorage.setItem('styleMap', '/maps/circuitos/style.json');
  location.reload();
}

function setMapa3(){
  localStorage.setItem('styleMap', '/maps/cuadrantes/style.json');
  location.reload();
}



const geojson = {
type: 'FeatureCollection',
features: [

    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.13275, 19.62419631]
        },
        properties: {
        title: "VTULT-001",
        description: "JUAN ESCUTIA Y AGUSTÍN MELGAR IM (238)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1937364, 4342.646527777778]
        },
        properties: {
        title: "VTULT-002",
        description: "AV. DE LA CRUZ KIOSKO DE SAN MATEO IM (265)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1806221, 19.61560621]
        },
        properties: {
        title: "VTULT-003",
        description: "AV. JOSE LOPEZ PORTILLO ESQ. AV. 2 DE JULIO IM (274)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1734338, 19.6317551]
        },
        properties: {
        title: "VTULT-004",
        description: "INDEPENDENCIA Y 4TA. SUR (GLORIETA INDEPENDENCIA Y PUENTE INDEPENDENCIA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1344881, 19.6211443]
        },
        properties: {
        title: "VTULT-005",
        description: "16 DE SEPTIEMBRE Y VICENTE SUÁREZ (ESCALERAS SIN BARANDAL) MI (266)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1669750, 19.6211039]
        },
        properties: {
        title: "VTULT-006",
        description: "VIA JOSE LOPEZ PORTILLO Y CALLE HANK GONZALEZ (ENFRENTE DE LA COMERCIAL) 4 (268)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1663957, 19.6364439]
        },
        properties: {
        title: "VTULT-007",
        description: "BOULEVARD TULTITLÁN PONIENTE (FRENTE A JARRITOS) 3 (94)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1967023, 19.6258132]
        },
        properties: {
        title: "VTULT-008",
        description: "AVENIDA PRADOS NORTE Y PRADOS SUR (CRUCE) 3 (206)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1397023, 19.6258132]
        },
        properties: {
        title: "VTULT-009",
        description: "DE LA CRUZ Y BENITO JUÁREZ 3 (97)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1454315, 19.6255707]
        },
        properties: {
        title: "VTULT-010",
        description: "DE LA CRUZ Y ANGEL ESCUTIA ( HOTEL PARAISO) 4 (101)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1429639, 19.6137861]
        },
        properties: {
        title: "VTULT-011",
        description: "REAL DEL BOSQUE Y MAMEY (AURRERA) 4 (104)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-991320205, 19.6295926]
        },
        properties: {
        title: "VTULT-012",
        description: "VIA LOPEZ PORTILLO Y NIÑOS HÉROES (BAZAR TULTITLÁN) 2 (4)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.4551, 19.6143733]
        },
        properties: {
        title: "VTULT-013",
        description: "AV. DE LAS TORRES Y CALLE PETUNIAS 2 (107)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1658592, 19.6035491]
        },
        properties: {
        title: "VTULT-014",
        description: "AV. DE LAS TORRES Y 5 DE FEBRERO ( MÓDULO DEL SECTOR 3) 3 (129)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-991702151, 19.605995]
        },
        properties: {
        title: "VTULT-015",
        description: "AV. DE LAS TORRES E INSURGENTES 1 ( 293)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-991382861, 19.622539]
        },
        properties: {
        title: "VTULT-016",
        description: "SOTO Y BENITO JUÁREZ (SUBIDA DEL REAL DEL BOSQUE) 3 (8)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1782188, 19.5921885]
        },
        properties: {
        title: "VTULT-017",
        description: "CENTRO INDUSTRIAL Y DE LAS ROSAS ( VALLE VERDE Y VALLE DE TULES) IM (141)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-991827786, 19.583061]
        },
        properties: {
        title: "VTULT-018",
        description: "BUENAVISTA Y SAN MARTÍN ( DEPORTIVO INDEPENDENCIA RINCONADA SAN MARCOS ) IM ( 300)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-971717494, 19.5830913]
        },
        properties: {
        title: "VTULT-019",
        description: "AVENIDA CHILPANCINGO Y RIO PANUCO ( SEGUNDO PISO AUTOPISTA PRICE SHOES) I'M (141)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-991717815, 19.599294]
        },
        properties: {
        title: "VTULT-020",
        description: "AVENIDA REFORMA Y JACARANDAS (JARDINES DE LA CAÑADA) IM (294)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-991665030, 19.6077232]
        },
        properties: {
        title: "VTULT-021",
        description: "FRANCISO I MADERO Y TOLUCA ( BUENAVISTA) IM (148)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1679621, 19.6448206]
        },
        properties: {
        title: "VTULT-022",
        description: "BOULEVARD TULTITLÁN PONIENTE Y GENERAL MARIANO ESCOBEDO ( CASA DE CULTURA) IM (255)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1908574, 19.6163743]
        },
        properties: {
        title: "VTULT-023",
        description: "LATERAL DE LA PISTA MÉXICO QUERÉTARO ( LAVADEROS) IM ( 313)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1647649, 19.6133424]
        },
        properties: {
        title: "VTULT-024",
        description: "JOSE MARIA MORELOS Y PAVÓN BUENAVISTA ( BUENAVISTA PARTE ALTA) IM (244)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.18118, 19.5790783]
        },
        properties: {
        title: "VTULT-025",
        description: "SANTA ROSa Y SAN MARCOS ( IGLESIA) IM ( 275)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-991412902, 19.6166775]
        },
        properties: {
        title: "VTULT-026",
        description: "AVENIDA REAL DEL BOSQUE Y BOSQUE DE LIMA ( DEPORTIVO REAL DEL BOSQUE) IM ( 296)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.15055599, 19.6113616]
        },
        properties: {
        title: "VTULT-027",
        description: "TOLUCA Y TEPATLAXCO ( SOLIDARIDAD 3RA. SECC 9 IM ( 276 )"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1531134, 19.69052621]
        },
        properties: {
        title: "VTULT-028",
        description: "AV. RECURSOS HIDRÁULICOS Y AV. UNO ( CRUCE DE VÍAS ) IM ( 245 )"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1048336, 19.6837278]
        },
        properties: {
        title: "VTULT-029",
        description: "GLIFOS Y PORTAL MERCURIO ( PORTAL SAN PABLO/ RECURSOS HIDRÁULICOS AURRERA)IM (182)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1669214, 19.5945941]
        },
        properties: {
        title: "VTULT-030",
        description: "AV. LA PERLA Y CALLE HIERRO ( EL TESORO) IM (295)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1600429, 19.5998082]
        },
        properties: {
        title: "VTULT-031",
        description: "LOTE 4 Y CALLE FLORES CON GIRASOLES ( PRADOS ZONA ORIENTE) IM (320)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1660845, 19.6066317]
        },
        properties: {
        title: "VTULT-032",
        description: "AV. INSURGENTES Y C. lEONARDO DE TEJADA ( EDAYO, BENITO JUÁREZ ) IM (277)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1634345, 19.610105]
        },
        properties: {
        title: "VTULT-033",
        description: "BUENAVISTA Y HERMENEGILDO GALEANA ( SECUNDARIA PITUFOS) IM (291)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0873241, 19.6869907]
        },
        properties: {
        title: "VTULT-034",
        description: "A. DEL CANAL Y AV. TULTEPEC (ALAMEDAS) IM (278)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1577482, 19.6235293]
        },
        properties: {
        title: "VTULT-035",
        description: "JOSE LOPEZ PORTILLO Y BOULEVARD BENITO JUAREZ ( DOMINOS PIZZA/ PUNTO 5) 4 (335)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1577482, 19.6235293]
        },
        properties: {
        title: "VTULT-036",
        description: "JOSE LOPEZ PORTILLO Y AV. CIPRESES ( ENTRADA AL INVERNADERO/ENTRADA CONALEP) IM (246)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1569972, 19.6367268]
        },
        properties: {
        title: "VTULT-037",
        description: "CONSTITUCIÓN DE 1857 CONSTITUYENTES SEC. 2 DE MARZO IM (80)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.16669106, 19.6305021]
        },
        properties: {
        title: "VTULT-038",
        description: "AV. INDEPENDENCIA Y BODEGA BONAFONT ( PUENTE CLOUTHIER) IM (287)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1278899, 19.6429008]
        },
        properties: {
        title: "VTULT-039",
        description: "ISLA PLATA Y CALLE ISLA TERRANOVA (UVPM/PORTALES) IM (301)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1324496, 19.6429008]
        },
        properties: {
        title: "VTULT-040",
        description: "FUENTE DE TAURO Y PASEO DE LOS JINETES ( VILLAS DE SAN JOSÉ) IM (247)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0876889, 19.6736367]
        },
        properties: {
        title: "VTULT-041",
        description: "JIMÉNEZ CANTÚ Y CONSTITUCIÓN DE 1857 ( CECYTEM) IM (279)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0872169, 19.6614818]
        },
        properties: {
        title: "VTULT-042",
        description: "AV. SAN PABLO Y AV. MAGNOLIAS ( LAS GRANJAS) IM (280)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1721141, 19.6534394]
        },
        properties: {
        title: "VTULT-043",
        description: "ISIDRO FABELA CASI ESQUINA LA PALMA (EL MP 15/LÍMITE CUAUTITLAN) IM (254)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.184742, 19.6410719]
        },
        properties: {
        title: "VTULT-044",
        description: "CARRETERA TLALNEPANTLA CUAUTITLÁN Y CALLE CHIMALHUACAN ( PARADA DEL ARBOL) HOTEL PARAISO"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1809654, 19.6385457]
        },
        properties: {
        title: "VTULT-045",
        description: "CIRCUITO EXTERIOR MEXIQUENSE Y JALTENCO IM (257)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1845274, 19.6338368]
        },
        properties: {
        title: "VTULT-046",
        description: "TLALNEPANTLA - CUAUTITLÁN Y AV. INDEPENDENCIA ( PUENTE DE INDEPENDENCIA)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.175998, 19.6087339]
        },
        properties: {
        title: "VTULT-047",
        description: "BOULEVARD REFORMA (CHEDRAUI) IM (192)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.17485, 19.6090573]
        },
        properties: {
        title: "VTULT-048",
        description: "AV. DE LAS TORRES Y RÍO COATZACOALCOS ( OJO DE AGUA) IM (167)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1653228, 19.5988695]
        },
        properties: {
        title: "VTULT-049",
        description: "AV. MONEDA Y CALLE PRADERA (MUEBLERIA ROSA)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1695285, 19.5961203]
        },
        properties: {
        title: "VTULT-050",
        description: "NAUCALPAN Y CALLE TLANEPANTLA ( LA SARDAÑA) (296)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.138719, 19.63412]
        },
        properties: {
        title: "VTULT-051",
        description: "Fuentes de cleo y Blud de las Fuentes col. Fuentes del Valle."
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.135824, 19.633074]
        },
        properties: {
        title: "VTULT-052",
        description: "Fuentes de ceres y Fuente de chapultepec niños heroes y glorieta portales."
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.079662, 19.674761]
        },
        properties: {
        title: "VTULT-053",
        description: "AV.quintana roo y Av. Del canal Tinaco, recidencial morelos 2da sec."
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.146534, 19.626283]
        },
        properties: {
        title: "VTULT-054",
        description: "Av. Lopez potillo y av. De la cruz Hotel paraiso"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.142004, 19.619284]
        },
        properties: {
        title: "VTULT-055",
        description: "Niños heroes y Amecameca primaria"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.147505, 19.613554]
        },
        properties: {
        title: "VTULT-056",
        description: "Otzoloapan- Chincocua ampliacion san marcos"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.159263, 19.599543]
        },
        properties: {
        title: "VTULT-057",
        description: "Av. De las torres y Reforma Parque ampliacion las torres"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.169236, 19.646577]
        },
        properties: {
        title: "VTULT-058",
        description: "Av. Principal calle Hidalgo explanada famsa"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.165455, 19.648132]
        },
        properties: {
        title: "VTULT-059",
        description: "Blurd. Tultitlan Ote y AV.Hidalgo Banorte"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.170449, 19.627957]
        },
        properties: {
        title: "VTULT-060",
        description: "Av. Alamo - pino colonia los reyes"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.158768, 19.634979]
        },
        properties: {
        title: "VTULT-061",
        description: "Recuros Hidraulicos y cipres vias"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.09151, 19.660957]
        },
        properties: {
        title: "VTULT-062",
        description: "Eje 3 y A.v morelos san pablo de las salinas"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.167668, 19.649364]
        },
        properties: {
        title: "VTULT-063",
        description: "20 de Noviembre y 16 de septiembre atrás de la primaria zona centro"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.173467, 19.648805]
        },
        properties: {
        title: "VTULT-064",
        description: "Abundio Gomez y Gustabo vaz prada panteon san Bartolo"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.175021, 19.644508]
        },
        properties: {
        title: "VTULT-065",
        description: "San antonio Jose Subieta av. San Antonio puente la concha"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.07416, 19.680795]
        },
        properties: {
        title: "VTULT-066",
        description: "Leonardo Bravo - Canal el desague crto exterior Mexiquense pista santa ines"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.176651, 19.640756]
        },
        properties: {
        title: "VTULT-067",
        description: "Bernal Diaz otl Castillo Tepetlixpan"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.180102, 19.643802]
        },
        properties: {
        title: "VTULT-068",
        description: "Temascalapa- Chalco Panteon de la concha"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.182598, 19.641442]
        },
        properties: {
        title: "VTULT-069",
        description: "Calle Teoloyucan- cuautitlan"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.155173, 19.650636]
        },
        properties: {
        title: "VTULT-070",
        description: "AV.uno y Av. Hidalgo Plasticos Panamericanos cartagena"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.124821, 19.641086]
        },
        properties: {
        title: "VTULT-071",
        description: "Crto Mexiquense Limites Coacalco Planta de Tratamiento de agua"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.136937, 19.044534]
        },
        properties: {
        title: "VTULT-072",
        description: "Agavez- san antonio y entrada los agaves"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.131894, 19.641891]
        },
        properties: {
        title: "VTULT-073",
        description: "Islas canarias aruba Atrás del oxxo"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.151779, 19.635177]
        },
        properties: {
        title: "VTULT-074",
        description: "Rancho sta. Mria y Paseo de los jinetes Primaria limites Coacalco"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.127386, 19.632816]
        },
        properties: {
        title: "VTULT-075",
        description: "Rancho san jose arq. Antonio Flores Torres atrás de liverpooly cosmopol"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.08393, 19.681941]
        },
        properties: {
        title: "VTULT-076",
        description: "Av del Canal y acacias Mercado morelos Infonavit"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.159333, 19.599384]
        },
        properties: {
        title: "VTULT-077",
        description: "Av de las torres y camino Electra real col el Tesoro"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.165865, 19.58979]
        },
        properties: {
        title: "VTULT-078",
        description: "Calle Jacaranda crto. Rosario Ibarra"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.183789, 19.584532]
        },
        properties: {
        title: "VTULT-079",
        description: "Conagua Valle de Alameda y valle de oro"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.170885, 19.647028]
        },
        properties: {
        title: "VTULT-080",
        description: "Lic.Juan Fernandez Albarran y Ing. Salvador Sanchez colin DIF ZONA CENTRO"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.173976, 19.582628]
        },
        properties: {
        title: "VTULT-081",
        description: "Av. Chinpancingo calle morelos Modulo - Chinpancingo"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.166834, 19.587214]
        },
        properties: {
        title: "VTULT-082",
        description: "Av Torres central"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.138845, 19.628325]
        },
        properties: {
        title: "VTULT-083",
        description: "Av.Lopez portillo y Fuentes del Valle "
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.15798, 19.619391]
        },
        properties: {
        title: "VTULT-084",
        description: "av. Las torres y los Olivos col . Bunavista "
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.136688, 19.619469]
        },
        properties: {
        title: "VTULT-085",
        description: "Av Real del Bosque Aurrera oxxo Farmacia Guadalajara"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.153046, 19.606064]
        },
        properties: {
        title: "VTULT-086",
        description: "Av estado de Mexico y zacualpan Camino al tiradero"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.091015, 19.672066]
        },
        properties: {
        title: "VTULT-087",
        description: "Calle Oaxaca y guerrero an pablo de las Salinas"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.155392, 19.597258]
        },
        properties: {
        title: "VTULT-088",
        description: "Av de las torres y gavilanes calle alondra y calle canario sierra de guadalupe"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.080471, 19.660256]
        },
        properties: {
        title: "VTULT-089",
        description: "av. Prados y av magnolias soriana las Granjas san Pablo"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.08671, 19.678836]
        },
        properties: {
        title: "VTULT-090",
        description: "av. Prados sur y jorge Jimenez cantu entrada de casitas cantu"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.183065, 19.591207]
        },
        properties: {
        title: "VTULT-091",
        description: "av. Industrial y valle de las alamedas liverpol"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.147671, 19.609609]
        },
        properties: {
        title: "VTULT-092",
        description: "Texcoco y Tejupilco- Base de las combis Solidaridad"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.170325, 19.620177]
        },
        properties: {
        title: "VTULT-093",
        description: "Av. Lopez Portillo - Tornel"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.166514, 19.597526]
        },
        properties: {
        title: "VTULT-094",
        description: "Av. Naucualpan tesoro y av. La perla "
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.148094, 19.620885]
        },
        properties: {
        title: "VTULT-095",
        description: "San Mateo Atlacomulco San mateo Cuautepec"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.127569, 19.630227]
        },
        properties: {
        title: "VTULT-096",
        description: "Av. Lopez Potillo - limites Coacalco"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.171879, 19.645774]
        },
        properties: {
        title: "VTULT-097",
        description: "San antonio y Gral Mariano Escobedo "
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.178345, 19.615493]
        },
        properties: {
        title: "VTULT-098",
        description: "Av. Juarez Mirador Iglesia Chilpan"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.174594, 19.611319]
        },
        properties: {
        title: "VTULT-099",
        description: "Av. Margarita maza y Lazaro cardenas secundaria 82 rosario castellanos "
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.176349, 19.60173]
        },
        properties: {
        title: "VTULT-100",
        description: "Bulevar cuidad labor y bulevar lomas de cartagena"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.159915, 19.593937]
        },
        properties: {
        title: "VTULT-101",
        description: "Av las Torres y Gavilanes col cierra de guadalupe"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1746569, 19.5953319]
        },
        properties: {
        title: "VTULT-102",
        description: "Av. Moneda - deportivo zapata"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1811156, 19.6128371]
        },
        properties: {
        title: "VTULT-103",
        description: "Av.Lopez Potillo y av las torres "
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1737986, 19.603256]
        },
        properties: {
        title: "VTULT-104",
        description: "Calle claveles y Bulevar reforma jardines de la cañada"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1743028, 19.5919964]
        },
        properties: {
        title: "VTULT-105",
        description: "av. Naucalpan y av. Industrial la cañada"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1740024, 19.5878724]
        },
        properties: {
        title: "VTULT-106",
        description: "calle gavilanes y guadalajara ampliacion buenavista 2 da seccion "
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1809118, 19.5865988]
        },
        properties: {
        title: "VTULT-107",
        description: "calle flamingos y Calle gansos valle de tules"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1490793, 19.6028921]
        },
        properties: {
        title: "VTULT-108",
        description: "Tlazala de Isidro Fabela Mexicalzingo"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1816736, 19.5762277]
        },
        properties: {
        title: "VTULT-109",
        description: "SANTA MONICA Y CALLE SAN PEDRO SAN MARCOS"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1644001, 19.5789368]
        },
        properties: {
        title: "VTULT-110",
        description: "BAMBU Y CHABACANO LIMITES TLANEPANTLA , AMPLIACION SAN MARCOS"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0797925, 19.6841521]
        },
        properties: {
        title: "VTULT-111",
        description: "PLATA Y ESTAÑO, PRIMARIA ADOLFO-ALBORADA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1736913, 19.6147169]
        },
        properties: {
        title: "VTULT-112",
        description: "CALLE BUENAVISTA CALLE PENSADOR MEXICANO,CHILPAN"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.07166, 19.670716]
        },
        properties: {
        title: "VTULT-113",
        description: "LARA CAMACHO -AURRERA ABANDONADA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1635847, 19.6192849]
        },
        properties: {
        title: "VTULT-114",
        description: "CALLE HERMENEGILDO GALEANA Y LA LOMA, EL FRESNO"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.163413, 19.6484885]
        },
        properties: {
        title: "VTULT-115",
        description: "IGNACIO ALDAMA Y AV. HIDALGO INE TULTITLAN"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1816521, 19.6428907]
        },
        properties: {
        title: "VTULT-116",
        description: "AVENIDA SAN ANTONIO Y TEPOTZOTLAN OXXO"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.169035, 19.6481247]
        },
        properties: {
        title: "VTULT-117",
        description: "ISIDRO FABELA Y GENENERAL ABUNDIO GOMEZ.COLONIA CENTRO (FARMACIA GUADALAJARA)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1851711, 19.6240144]
        },
        properties: {
        title: "VTULT-118",
        description: "CARRETERA TLALNEPANTLA- CUAUTITLAN Y CAMINO A TEPACALPA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1862011, 19.6161318]
        },
        properties: {
        title: "VTULT-119",
        description: "CARRETERA TLALNEPANTLA-CUATITLAN Y 11 DE JULIO"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1869307, 19.6070562]
        },
        properties: {
        title: "VTULT-120",
        description: "CARRETERA TLANEPANTLA- CUATITLAN Y FERROCARRILERA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.134926, 19.634858]
        },
        properties: {
        title: "VTULT-121",
        description: "PORTALES Y RANCHO SANTA MARIA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1682196, 19.6474578]
        },
        properties: {
        title: "VTULT-122",
        description: "AVENIDA HIDALGO Y 16 DE SEPTIEMBRE EXPLANADA CENTRO"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.141537, 19.6337964]
        },
        properties: {
        title: "VTULT-123",
        description: "FUENTE DE CLEO Y FUENTE DE CERVANTES(LA UVA)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1614819, 19.6224177]
        },
        properties: {
        title: "VTULT-124",
        description: "AVENIDA LOPEZ PORTILLO,BAJANDO PUENTE DE LA BANDERA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.1685629, 19.6228623]
        },
        properties: {
        title: "VTULT-125",
        description: "CALLE ISIDRO FABELA Y SANCHEZ COLIN"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0736985, 19.6686348]
        },
        properties: {
        title: "VTULT-126",
        description: "AVENIDA LLANURAS Y CALLE NIEVE HACIENDA SAN PABLO"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0789771, 19.6818488]
        },
        properties: {
        title: "VTULT-127",
        description: "LEONARDO DE BRAVO Y NIQUEL,JARDINES DE LOS CLAUSTROS VI"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.081552, 19.6832025]
        },
        properties: {
        title: "VTULT-128",
        description: "PLOMO,ALBORADA 1,Y ALBORADA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0857577, 19.6711605]
        },
        properties: {
        title: "VTULT-129",
        description: "SERGIO PEREZ TOVAR Y CONSTITUCION DE 1917,ALBORADA 2"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.082818, 19.6800709]
        },
        properties: {
        title: "VTULT-130",
        description: "PRADOS SUR Y CANAL DE CASTERA (PUESTO DE PERIODICOS),UNIDAD MORELOS 3RA SECCION"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0783119, 19.6804749]
        },
        properties: {
        title: "VTULT-131",
        description: "SAN CARLOS Y SAN MARTIN, (DEPORTIVO FAROLES)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0778613, 19.6720466]
        },
        properties: {
        title: "VTULT-132",
        description: "DEL CANAL Y CONSTITUCION DE 1857 CURVA ELECTRICA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0746641, 19.6752016]
        },
        properties: {
        title: "VTULT-133",
        description: "TORTOLAS, DIF TEJADO , TEJADOS"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0814233, 19.6778888]
        },
        properties: {
        title: "VTULT-134",
        description: "DEL CANAL, AUTOLAVADO LA BURBUJA (BASTO A MORELOS)UNIDAD MORELOS 2DA SECCION"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0946627, 19.6845561]
        },
        properties: {
        title: "VTULT-135",
        description: "SUBDELEGACION MUNICIPAL ZONA ORIENTE , UNIDAD MORELOS 3RA SECCION"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.08638, 19.6859098]
        },
        properties: {
        title: "VTULT-136",
        description: "AV DEL CANAL Y PRADOS NORTE,BASE DE TAXIS , FARMACIA-INFONAVIT"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0916586, 19.6866371]
        },
        properties: {
        title: "VTULT-137",
        description: "PRADOS NORTE Y PRADOS CENTRO MERCADO PRADOS NORTE, UNIDAD MORELOS 3RA SECCION"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0799642, 19.6802729]
        },
        properties: {
        title: "VTULT-138",
        description: "VICTOR BRAVO Y CONGRESO DE ANAHUAC DEPORTIVO UNIDAD MORELOS 2DA SECCION"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0907574, 19.6652604]
        },
        properties: {
        title: "VTULT-139",
        description: "MORELOS Y VENUSTIANO CARRANZA AUDITORIO SAN PABLO CENTRO"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.096706, 19.664587]
        },
        properties: {
        title: "VTULT-140",
        description: "AVENIDO MELCHOR OCAMPO Y CALLE BENITO JUAREZ, LOS LAVADEROS SAN PABLO"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.106886, 19.680301]
        },
        properties: {
        title: "VTULT-141",
        description: "RECURSOS HIDRAHULICOS Y QUINTANAROO MIELERA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0822172, 19.6752218]
        },
        properties: {
        title: "VTULT-142",
        description: "AVENIDA QUINTANA ROO Y SITIODE CUAUTLA,UNIDAD MORELOS 2DA SECCION"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-9.0898347, 19.6815458]
        },
        properties: {
        title: "VTULT-143",
        description: "CLAVELES Y COLORINES, LA ISLA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0891266, 19.6677256]
        },
        properties: {
        title: "VTULT-144",
        description: "JIMENEZ CANTU E IGNACIO ZARAGOZA(SECUNDARIA 25) SAN PABLO DE LAS SALINAS"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0723252, 19.6633408]
        },
        properties: {
        title: "VTULT-145",
        description: "DE LA PRADERA Y CANAL Y DE CASTERA DEL CAMPANARIO"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0965509, 19.6855461]
        },
        properties: {
        title: "VTULT-146",
        description: "PRADOS DEL NORTE Y PRADOS CENTRO GLORIETA UNIDAD MORELOS 3RA SECCION"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0890622, 19.6766159]
        },
        properties: {
        title: "VTULT-147",
        description: "QUINTANA ROO,DEPORTIVO DEL RELOJ- EL RELOJ"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.094491, 19.6819094]
        },
        properties: {
        title: "VTULT-148",
        description: "PRADOS SUR,PREPA 34,UNIDAD MORELOS 3RA SECCION"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0874529, 19.6822933]
        },
        properties: {
        title: "VTULT-149",
        description: "GALERAS ZONA ORIENTE,CALLE ENCINOS LOS PATOSLA ISLA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.0813589, 19.6701705]
        },
        properties: {
        title: "VTULT-150",
        description: "CONSTITUCION DE LA REPUBLICA PRIMARIA SOR JUANA INES ,ALBORADA 2"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.077842, 19.658239]
        },
        properties: {
        title: "1",
        description: "COL. IMMEX II AV. EJE 3 ESQ CALLE MANUEL MORELOS"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.076813, 19.667023]
        },
        properties: {
        title: "2",
        description: "COL. IZCALLI SAN PABLO CALLE PLANICIE ESQ CANAL DE CASTERA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.102117, 19.679217]
        },
        properties: {
        title: "3",
        description: "COL. SAN PABLO DE LAS SALINAS CALLE QUINTANA ROO ESQ LEANDRO VALLE"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.097103, 19.678186]
        },
        properties: {
        title: "4",
        description: "COL. BONITO TUTITLAN CALLE QUINTANA ROO ESQ CHETUMAL"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.094689, 19.673286]
        },
        properties: {
        title: "5",
        description: "AGORA DE SAN PABLO DE LAS SALINAS CALLE OAXACA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.093327, 19.680713]
        },
        properties: {
        title: "6",
        description: "UNIDAD MORELOS 3RA SECCION AV. PRADOS SUR BIBLIOTECA DIGITAL"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.093328, 19.680713]
        },
        properties: {
        title: "7",
        description: "COL. EL PORTAL SALIDA AV. PRADOS SUR"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.079397, 19.665392]
        },
        properties: {
        title: "8",
        description: "COL JARDINES DE SAN PABLO AV. PRADOS DEL NORTE PLAZA JARDINES"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.152941, 19.605138]
        },
        properties: {
        title: "9",
        description: "COL. SOLIDARIDAD TERCERA SECCION AV. ESTADO DE MEXICO ESQ. SAN MARTIN DE LAS PIRAMIDES, (NUEVA ESTACION DE BOMBEROS)."
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.135622, 19.64077]
        },
        properties: {
        title: "10",
        description: "AV. MEXIQUENSE ESQ. SAN ANTONIO (SORIANA / CENTRAL DE ABASTOS)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.152769, 19.649676]
        },
        properties: {
        title: "11",
        description: "AV. CUAUTITLAN PARQUE INDUSTRIAL CARTAGENA DEPORTIVO CARTAGENA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99161587, 19.643344]
        },
        properties: {
        title: "12",
        description: "CALLE VALENTIN GOMEZ FARIAS BARRIO SAN JUAN ESQ. ADOLFO LOPEZ MATEOS"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.166358, 19.644479]
        },
        properties: {
        title: "13",
        description: "CALLE ADOLFO LOPEZ MATEOS ESQ. BOULEVARD TULTITLAN OTE BARRIO SAN JUAN"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.164264, 19.626659]
        },
        properties: {
        title: "14",
        description: "BOULEVARD TULTITLAN PTE, BOSQUES DE TULTITLAN (HOSPITAL DEL ISSTE /GAS G500)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.170483, 19.630946]
        },
        properties: {
        title: "15",
        description: "UNIDAD ELECTRICISTAS AV. INDEPENDENCIA (FRENTE A LA ESTACION DE BOMBEROS)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.180107, 19.635828]
        },
        properties: {
        title: "16",
        description: "CALLE SEGUNDA CERRADA DE ECATEPEC CASI ESQ CUARTA N (ESTACIONAMIENTO ESTACION TULTITLAN DEL SUBURBANO)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.180565, 19.635384]
        },
        properties: {
        title: "17",
        description: "CALLE SEGUNDA CERRADA DE ECATEPEC ENTRADA A SUBURBANO TULTITLAN (ESTACIONAMIENTO MOTOS/ BICIS)"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.183751, 19.599787]
        },
        properties: {
        title: "18",
        description: "AV. JOSE LOPEZ PORTILLO ENTRADA A SUBURBANO ESTACION LECHERIA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.183465, 19.594275]
        },
        properties: {
        title: "19",
        description: "AV JOSE LOPEZ PORTILLO, IZCALLI DEL VALLE CAMELLON DE CARRILES CONFINADOS MEXIBUS."
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.175049, 19.58334]
        },
        properties: {
        title: "20",
        description: "CALLE TOLUCA ESQ ESTADO DE MEXICO, AMPLIACIÓN BUENAVISTA"
        }
    },
    
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [-99.178972, 19.58521]
        },
        properties: {
        title: "21",
        description: "CALLE FLAMINGOS, BUENAVISTA PARTE BAJA (CASA ROSA)"
        }
    },
    

]
};



mapboxgl.accessToken = 'pk.eyJ1IjoiamVzcy05NiIsImEiOiJja3Zscm5lbjlibHp5Mm5vZnpsdGp5MWZuIn0.MfXar3pHMu16n6c6eNwkHQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: localStorage.getItem('styleMap'),
  center: [-99.098399, 19.628999],
  zoom: 12
});


function addMarkersCCTV(){
  for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker-postes';
    el.id = 'markerscctv';
  
    // make a marker for each feature and add to the map
    //new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(new mapboxgl.Popup({ offset: 15}).setHTML(`ID: ${feature.properties.title}<br>Descripcion: ${feature.properties.description}`)).addTo(map);
  }
}

function removeMarkersCCTV(){
  for (const feature of geojson.features) {
    document.getElementById('markerscctv').remove();
  }
}