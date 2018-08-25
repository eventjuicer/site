
export const styleMapping = {

  263 : "style1", //light
  264 : "style2", //standard
  265 : "style3", //hot
  266 : "style4", //superhot
  267 : "style5", //ultra
  268 : "style6", //grand
  269 : "style6"
}

export const getStylingName = (groupId) => {
  return groupId in styleMapping ? styleMapping[groupId] : "style1"
}

const styles = {

  booth: {
    position: 'absolute',
    display: 'block',

   backgroundColor: 'lightgreen',
   border: '1px solid green',
   color: 'black',

    zIndex: 20,
    borderRadius: 3,
    cursor: 'pointer',
    padding: 0,
    margin: 0,
    textAlign: 'center',
    boxShadow: '1px 1px #555555',
    overflow: 'hidden',
    whiteSpace: 'wrap'
  },

  boothOnLegend : {
    position: 'relative',
    marginRight : 10
  },
  
  boothHold: {
    backgroundColor: '#D3D3D3',
    color: '#666666'
  },

  boothSold: {
    backgroundColor: '#D3D3D3',
    borderColor: '#999',
    color: '#666666'
  },

  boothSelected: {
    backgroundColor: 'blue',
    color: 'white',
    border: '3px solid black'
  },

  boothText: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 'normal',
    fontWeight: 600,
    fontFamily: 'verdana, arial, sans-serif',
    fontSize: 9
  },

  boothLogotype: {},

  cname: {
    display: 'block'
  },


  style1: {
    backgroundColor: "#5fe85d",
    color :  "#ffffff",
    borderColor: "#4bb749",
  },

  style2: {
    backgroundColor: "#55cf52",
    color :  "#ffffff",
    borderColor: "#409c3e"
  },

  style3: {
    backgroundColor: "#4bb749",
    color :  "#ffffff",
    borderColor: "#358234"
  },

  style4: {
    backgroundColor: "#409c3e",
    color :  "#ffffff",
    borderColor: "#004500"
  },

  style5: {
    backgroundColor: "#358234",
    color :  "#ffffff",
    borderColor: "#004500"
  },

  style6 : {
    backgroundColor: "#30bfca",
    color :  "#ffffff",
    borderColor: "#1e7980"

  },


}


export default styles
