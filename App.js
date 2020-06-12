/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import FS from 'react-native-fs';

class App extends Component {
  state = {
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    word1: '',
    word2: '',
    word3: '',
    word4: '',
    word5: '',
    data: [],
  };
  splitLetters = (word) => {
    let res = word.split('');
    return res;
  };

  onPressAddButton = () => {
    const {
      question1,
      question2,
      question3,
      question4,
      question5,
      word1,
      word2,
      word3,
      word4,
      word5,
      data,
    } = this.state;
    const newItem = {
      questions: [question1, question2, question3, question4, question5],
      crossword: [
        this.splitLetters(word1),
        this.splitLetters(word2),
        this.splitLetters(word3),
        this.splitLetters(word4),
        this.splitLetters(word5),
      ],
    };

    data.push(newItem);
    console.log(data);
  };

  onPressCreateFile = () => {
    const {data} = this.state;
    const filePath = FS.DocumentDirectoryPath + '/TRWords.json';
    FS.writeFile(filePath, JSON.stringify(data), 'utf8')
      .then((success) => {
        console.log('SUCCESS');
        console.log(filePath);
      })
      .catch((err) => {
        console.log('ERROR : ', err);
      });
  };
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{flex: 1, backgroundColor: 'white'}}>
              <View style={styles.groupViewStyle}>
                <Text>Sorular</Text>
                <TextInput
                  placeholder="Soru 1"
                  style={styles.textInputStyle}
                  onChangeText={(text) => this.setState({question1: text})}
                />
                <TextInput
                  placeholder="Soru 2"
                  style={styles.textInputStyle}
                  onChangeText={(text) => this.setState({question2: text})}
                />
                <TextInput
                  placeholder="Soru 3"
                  style={styles.textInputStyle}
                  onChangeText={(text) => this.setState({question3: text})}
                />
                <TextInput
                  placeholder="Soru 4"
                  style={styles.textInputStyle}
                  onChangeText={(text) => this.setState({question4: text})}
                />
                <TextInput
                  placeholder="Soru 5"
                  style={styles.textInputStyle}
                  onChangeText={(text) => this.setState({question5: text})}
                />
              </View>
              <View style={styles.groupViewStyle}>
                <Text>Kelimeler</Text>
                <TextInput
                  placeholder="Kelime 1"
                  style={styles.textInputStyle}
                  onChangeText={(text) => this.setState({word1: text})}
                />
                <TextInput
                  placeholder="Kelime 2"
                  style={styles.textInputStyle}
                  onChangeText={(text) => this.setState({word2: text})}
                />
                <TextInput
                  placeholder="Kelime 3"
                  style={styles.textInputStyle}
                  onChangeText={(text) => this.setState({word3: text})}
                />
                <TextInput
                  placeholder="Kelime 4"
                  style={styles.textInputStyle}
                  onChangeText={(text) => this.setState({word4: text})}
                />
                <TextInput
                  placeholder="Kelime 5"
                  style={styles.textInputStyle}
                  onChangeText={(text) => this.setState({word5: text})}
                />
              </View>
              <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={() => this.onPressAddButton()}>
                <Text style={styles.buttonTextStyle}>Ekle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={() => this.onPressCreateFile()}>
                <Text style={styles.buttonTextStyle}>Oluştur</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black',
  },
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    margin: 10,
  },
  groupViewStyle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  addButtonStyle: {
    margin: 10,
    padding: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: 'white',
  },
});

export default App;
