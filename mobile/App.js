/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, useWindowDimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';
import HTML from "react-native-render-html";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const htmlContent = `
    <h2>Editor.js</h2><p class="paragraph"> Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. </p><h3>Key features</h3><ul><li>It is a block-styled editor</li><li>It returns clean data output in JSON</li><li>Designed to be extendable and pluggable with a simple API</li></ul><h3>What does it mean «block-styled editor»</h3><p class="paragraph"> Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core. </p><p class="paragraph"> There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games. </p><h3>What does it mean clean data output</h3><p class="paragraph"> Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below </p><p class="paragraph"> Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on. </p><p class="paragraph"> Clean data is useful to sanitize, validate and process on the backend. </p><br /><p class="paragraph"> We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏 </p><figure class="fig-img"><img class="img img-bg" src="https://codex.so/public/app/img/external/codex2x.png" alt=""><figcaption class="fig-cap"></figcaption></figure>
`;
  const contentWidth = useWindowDimensions().width;


  return (
    // <WebWrapper></WebWrapper>
    <ScrollView style={{ flex: 1 }}>
      <HTML source={{ html: htmlContent }} contentWidth={contentWidth}
      tagsStyles={{p: {fontSize: 24}}}
      classesStyles={{'img': {width: '80%', height: 'auto'}}}
      />
      <Text>Hi!</Text>
    </ScrollView>
    // <MyInlineWeb></MyInlineWeb>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Text>Hello There!</Text>
    //     <WebWrapper></WebWrapper>
    //     <WebView

    //       originWhitelist={['*']}

    //       source={{ html: '<h1>This is a static HTML source!</h1>' }}

    //     />
    //   </ScrollView>
    // </SafeAreaView>
  );
};

const WebWrapper = () => {
  return (
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <WebView
        source={{ uri: 'https://reactnative.dev/' }}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={true}
      />
    </View>
  )
}

const MyInlineWeb = () => {

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>This is a static HTML source!</h1>' }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
