
// utility styles
// /////////////////////////////////////////////////////////////////////////////
export default {
  activeOpacity: 0.7,

  // containers
  // ///////////////////////////////////////////////////////////////////////////
  container: {
    dark: {
      backgroundColor: '#3a3a3a',
      flex: 1
    },
    light: {
      backgroundColor: '#ffffff',
      flex: 1
    }
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 0
  },

  // navigation styles
  // ///////////////////////////////////////////////////////////////////////////
  headerTitleStyle: {
    textAlign: 'center'
    
  },
  headerBaseEnds: {
    flex: 1,
    justifyContent: 'center'
  },

  // button
  // ///////////////////////////////////////////////////////////////////////////
  btn: {
    alignItems: 'center',
    backgroundColor: '#00ABEE',
    borderColor: '#00ABEE',
    borderWidth: 1,
    borderRadius: 4,
    height: 48,
    justifyContent: 'center',
    marginBottom: 16,
    paddingHorizontal: 24,
    paddingVertical: 8
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center'
  },
  // text
  // ///////////////////////////////////////////////////////////////////////////
  text: {
    dark: {
      color: '#ffffff'
    },
    light: {
      color: '#2a2a2a'
    }
  },
  textPacifico: {
    fontFamily: 'pacifico',
    fontSize: 20
  },

  // spacers
  // ///////////////////////////////////////////////////////////////////////////
  spacer16: {
    height: 16,
    width: '100%'
  },
  spacer64: {
    height: 64,
    width: '100%'
  }
};
