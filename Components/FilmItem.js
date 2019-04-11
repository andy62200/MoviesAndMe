import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem  extends React.Component {
  render() {
    const film = this.props.film
    return (
      <View style={styles.main_container}>
        <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(film.poster_path)}}
        />
        </View>
        <View style={styles.global_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
          <View style={styles.overview_container}>
            <Text style={styles.overview} numberOfLines={6}>{film.overview}</Text>
          </View>
          <View style={styles.release_date_container}>
            <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'gray',
    margin: 5,
    padding: 5
  },
  image_container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  global_container: {
    flexDirection: 'column',
    // backgroundColor: 'green',
    flex: 2
  },
  header_container: {
    // backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    paddingRight: 5
  },
  vote_text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#666666'
  },
  overview_container: {
    flex: 7,
    // backgroundColor: 'red',
    justifyContent: 'flex-start',
    marginLeft: 5
  },
  overview: {
    fontStyle: 'italic',
    color: '#666666'
  },
  release_date_container: {
    // backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 5
  },
  date_text: {
    fontSize: 14
  }
})

export default FilmItem
