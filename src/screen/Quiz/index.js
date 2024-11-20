import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SCREEN_WIDTH, vh, vw} from '../../utils/dimensions';
import CustomModal from '../../component/modal';

const Quiz = ({route, navigation}) => {
  const operatorArr = ['+', '-', '/', '*'];
  const [randomqQuestion, setRandomQuestion] = useState();
  const [flag, setFlag] = useState(0);
  const [score, setScore] = useState(0);
  const [allScore, setAllScore] = useState([]);
  const [ans, setAns] = useState(0);
  const [chooseOption, setChooseOption] = useState([]);
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState();
  const level = route.params?.level;
  const name = route.params?.name;

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    startTimer();
    let i = Math.floor(Math.random() * operatorArr.length);
    let answerArray = [];
    const number1 =
      level === 'normal'
        ? getRndInteger(5, 100)
        : level === 'medium'
        ? getRndInteger(100, 1000)
        : getRndInteger(1000, 10000);

    const operator = operatorArr[i];

    const number2 =
      level === 'normal'
        ? getRndInteger(5, 100)
        : level === 'medium'
        ? getRndInteger(100, 1000)
        : getRndInteger(1000, 10000);

    let randomAnswer1 = 0;

    if (operator == '+') {
      randomAnswer1 = number1 + number2;
      setRandomQuestion(number1 + operator + number2);
    } else if (operator == '-') {
      randomAnswer1 = number1 - number2;

      setRandomQuestion(number1 + operator + number2);
    } else if (operator == '/') {
      randomAnswer1 = parseFloat((number1 / number2).toFixed(2));

      setRandomQuestion(number1 + operator + number2);
    } else {
      randomAnswer1 = number1 * number2;

      setRandomQuestion(number1 + operator + number2);
    }
    setAns(randomAnswer1);
    answerArray.push(randomAnswer1);
    answerArray.push(getRndInteger(100, 1000));
    answerArray.push(getRndInteger(100, 1000));
    answerArray.push(getRndInteger(100, 1000));
    setChooseOption(answerArray);
  };

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffleOption(array) {
    console.log('{{{');

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleChosenOption = item => {
    setFlag(flag + 1);
    if (item === ans) {
      setScore(score + 10);
      setStatus('Correct');
    } else {
      setScore(score - 5);
      setStatus('Incorrect');
    }

    toggleModal();
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const nextQuestion = () => {
    if (flag < 2) {
      generateQuestion();
    } else {
      navigation.navigate('Score', {score, name});
    }
    toggleModal();
  };

  const [time, setTime] = useState(0); // Timer in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profile} />
          <Text style={styles.nameText}>{route.params?.name}</Text>
        </View>

        <View style={styles.Timercontainer}>
          <Text style={styles.timerText}>
            {String(Math.floor(time / 60)).padStart(2, '0')}:
            {String(time % 60).padStart(2, '0')}
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.heading}>Question {flag + 1}</Text>
          <View style={styles.cardQuestion}>
            <Text style={styles.questionStyle}>{randomqQuestion} = ?</Text>
          </View>
          {shuffleOption(chooseOption).map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleChosenOption(item)}>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
      <CustomModal isVisible={modal} onPress={nextQuestion} status={status} />
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004643BF',
    paddingHorizontal: 20,
    // alignItems: 'center',
  },
  cardQuestion: {
    width: SCREEN_WIDTH - 40,
    height: vh(100),
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
  },
  questionStyle: {fontSize: 25},
  option: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,

    width: SCREEN_WIDTH - 40,
    marginTop: vh(40),
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  profile: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: vh(20),
    paddingLeft: vw(20),
    alignItems: 'center',
  },
  Timercontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
