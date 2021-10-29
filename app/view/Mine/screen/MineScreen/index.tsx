import React from 'react';
import {Image, View, Text, StatusBar, StyleSheet} from 'react-native';
import {Button, List} from '@ant-design/react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => (
  <View
    style={{
      height: 234,
      backgroundColor: '#40A9FF',
    }}>
    <View
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
      }}>
      <Text
        style={{
          color: 'white',
          fontFamily: 'PingFangSC-Semibold',
          fontSize: 18,
        }}>
        首页
      </Text>
      <Ionicons
        name={'scan-sharp'}
        size={30}
        style={{position: 'absolute', top: 8, right: 10, color: 'white'}}
      />
    </View>
    <View
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        height: 190,
      }}>
      <Image
        source={require('../../../../assets/react-native-logo.png')}
        style={{
          width: 60,
          height: 60,
          margin: 30,
          marginBottom: 'auto',
          borderRadius: 50,
        }}
      />
      <View style={{marginTop: 30, marginBottom: 'auto'}}>
        <Text style={{color: 'white', fontFamily: 'PingFang SC', fontSize: 26}}>
          Muzi_Lm
        </Text>
        <Text style={{color: 'white', fontFamily: 'PingFang SC', fontSize: 14}}>
          华中师范大学
        </Text>
      </View>
      <AntDesign
        name="right"
        size={30}
        style={{
          position: 'absolute',
          top: 40,
          right: 12,
          color: 'white',
        }}
      />
    </View>
  </View>
);

const Resource = () => (
  <View
    style={{
      height: 114,
      marginTop: -57,
      marginLeft: 8,
      marginRight: 8,
      backgroundColor: 'white',
      borderRadius: 4,
    }}>
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <ResourceItem text="网盘空间用量" value="3.62" unit="G" />
      <ResourceItem text="网盘资源数" value="48" unit="个" />
      <ResourceItem text="流媒体空间用量" value="18.5" unit="G" />
    </View>
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <ResourceItem text="笔记数量" value="78" unit="篇" />
      <ResourceItem text="创建的课程数量" value="50" unit="节" />
      <ResourceItem text="参与的课程数量" value="50" unit="节" />
    </View>
  </View>
);

const ResourceItem = ({text, value, unit}: any) => (
  <View
    style={{
      flex: 1,
      height: 57,
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Text
        style={{
          color: '#FCBB34',
          fontFamily: 'PingFang SC',
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        {value}
      </Text>
      <Text
        style={{
          marginLeft: 2,
          fontFamily: 'PingFang SC',
          fontSize: 8,
          fontWeight: '400',
          textAlignVertical: 'bottom',
          lineHeight: 16,
        }}>
        {unit}
      </Text>
    </View>
    <Text style={{fontFamily: 'PingFang SC', fontSize: 8, fontWeight: '400'}}>
      {text}
    </Text>
  </View>
);

const ListGroup = () => (
  <List
    style={{
      marginTop: 12,
      marginLeft: 8,
      marginRight: 8,
      backgroundColor: 'white',
      borderRadius: 4,
    }}>
    <List.Item extra={<AntDesign name="right" size={16} />}>关于小雅</List.Item>
    <List.Item>检查更新</List.Item>
  </List>
);

export default function MineScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#40A9FF" />
      <Header />
      <Resource />
      <ListGroup />
      <Button
        type="primary"
        style={{
          marginTop: 24,
          marginLeft: 8,
          marginRight: 8,
          backgroundColor: '#FCBB34',
          borderColor: '#FCBB34',
          borderRadius: 4,
        }}>
        退出小雅
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
