import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Pure white
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#6C4AB6', // Soft purple
    textAlign: 'center',
    marginVertical: 15,
  },
  centerText: {
    fontSize: 16,
    color: '#333333', // Deep grey for readability
    textAlign: 'center',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#6C4AB6',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#6C4AB6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#F5F3FA', // Lavender white
    padding: 18,
    borderRadius: 16,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6C4AB6',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 18,
    color: '#222222',
    lineHeight: 28,
  },
  cardTranslation: {
    fontSize: 16,
    color: '#555555',
    marginTop: 10,
    fontStyle: 'italic',
  },
  sectionTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#6C4AB6',
  marginBottom: 10,
  marginTop: 15,
  paddingHorizontal: 15,
},

cardRow: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingHorizontal: 15,
  marginBottom: 20,
},

cardButton: {
  backgroundColor: '#E7D6FF',
  padding: 15,
  borderRadius: 15,
  width: '45%',
  alignItems: 'center',
  elevation: 3,
},

cardText: {
  fontSize: 16,
  fontWeight: '600',
  color: '#4A3F91',
},
centerText: {
  textAlign: 'center',
  marginVertical: 8,
  color: '#333',
  fontFamily: 'Arial',
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
header: {
  fontSize: 22,
  color: colors.primary,
  fontWeight: '700',
  marginLeft: 10,
},
sectionTitle: {
  fontSize: 18,
  fontWeight: '600',
  color: '#6C4AB6',
  marginTop: 20,
  marginBottom: 10,
  marginLeft: 10,
},
cardButton: {
  flex: 1,
  margin: 5,
  borderRadius: 12,
  padding: 15,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},

});
