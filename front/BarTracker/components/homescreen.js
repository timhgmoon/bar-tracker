import * as React from 'react';
import { View, Text } from 'react-native';
import Announcement from './announcement';
import Calendar from './calender';

export default function HomeScreen() {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            
            <Announcement> </Announcement>
            <Calendar> </Calendar>
            <Text>Hello! Home Screen</Text>
        </View>
    )
}