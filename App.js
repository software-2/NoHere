import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AppLoading } from "expo";
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import GitHubForkRibbon from 'react-github-fork-ribbon';

import {
  useFonts,
  Roboto_400Regular,
  SecularOne_400Regular,
} from "@expo-google-fonts/dev";

function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    SecularOne_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.preamble}>Look, I get it. You have a question. It's important. You need to get this resolved NOW.</Text>
        <Text style={styles.preamble}>But I'm begging you, for the sake of yourself and all your co-workers...</Text>
        <Text style={styles.headText}>Stop using @here</Text>
        <Text style={styles.preamble}>Let me explain</Text>
        <View style={styles.box}>
            <Text style={styles.paragraph}>
            You know when you're super focused and in the zone and getting all sorts of work done and somebody comes up, taps you on the shoulder to ask a question? 
            But it turns out you're not even the right person to ask, and they walk away, off to ask the next person. And now it's going to take you anywhere from 5 
            minutes to an hour to remember what you were even doing to begin with. 
            </Text>
            <Text style={styles.paragraph}>
            How many people were in that channel you just used @here on? A dozen? A hundred? A thousand? You just tapped every person on the shoulder, when you only 
            needed one person to answer you. Most of them couldn't even answer you if they wanted to. Multiply that 5-60 minutes by all of those people. How much time
            just got wasted? How many people sharing their screen in a meeting just had your question pop up on the screen because they forgot to turn off Slack first?
            </Text>


            <Text style={styles.preamble}>@here is for group emergencies</Text>

            <Text style={styles.paragraph}>
            Did the website just go down for you? Sounds like a valid time to use @here, right? Wrong. Ask in the channel without @here to see if it's down for anyone else. 
            I guarantee you, if there's actually an outage other people will be asking the same question. If it's just your machine, all those people don't need to be 
            pulled out of what they were doing to troubleshoot your issue.
            </Text>

            <Text style={styles.paragraph}>
            Is a customer on the phone with you screaming for an answer right now!? Do you need a developer or someone else to help you immediately, or you'll lose the sale?
            Still not time to strap on the @here alarm. Direct your message to a smaller target, or specific people.
            </Text>

            <Text style={styles.paragraph}>
            Did the server catch fire a few minutes ago, and you're the person working on it? Do you have information that the channel needs to know about when they'll 
            be able to get back to work? Now it might be time to alert everyone for a carefully reserved @here.
            </Text>

            <Text style={styles.paragraph}>
            Is it a small channel, and every person in the channel needs to attend a meeting that just got rescheduled or moved to a new room while people are on their way
            to the room? Sure, fire off an @here, because you've got important information that will save people time, not waste it.
            </Text>


            <Text style={styles.preamble}>Even when it gets you an answer faster, it's the wrong thing to do</Text>

            <Text style={styles.paragraph}>
            Your team wants to help you. That's why they respond so quickly when they hear that shht pah pah pah sound they jump in to help you. But if you ask your question
            without @here, they'll still answer you. They'll just do it when they have a few spare moments, or they're at a good break point where an interruption won't harm
            their productivity.
            </Text>


            <Text style={styles.preamble}> </Text>
            

        </View>
        <StatusBar style="auto" />
      </ScrollView>
    <GitHubForkRibbon href="https://github.com/software-2/NoHere" target="_blank" position="right-bottom" color="green">Fork me on GitHub</GitHubForkRibbon>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'black',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  headText: {
    textAlign: 'center',
    fontSize: 60,
    color: 'white',
    fontFamily: "SecularOne_400Regular",
    marginTop: 40,
    marginBottom: 40
  },
  preamble: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: "Roboto_400Regular",
    marginTop: 40
  },
  box: {
    marginTop: 20,
    maxWidth: 900,
    alignSelf: 'center',
  },
  paragraph: {
    fontSize: 17,
    color: 'white',
    fontFamily: "Roboto_400Regular",
    textAlign: 'left',
    marginTop: 20
  },
});


export default App