import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import { accountEndpoint } from '../constants'

export const AccountOverview = () => {

    const [accountDetails, setAccountDetails] = useState(null)

    const getAddressOverview = async () => {
        try {
            let response = await fetch(accountEndpoint);
            let jsonResult = await response.json()
            setAccountDetails(jsonResult.result[0])
            console.log(jsonResult.result[0])
        } catch (error) {
            return {"error": error}
        }
    }      

    useEffect(() => {
       if(!accountDetails) getAddressOverview()
    })

    return (
        <View style={styles.overviewContent}>
            <View style={styles.overviewTitle}>
              <Text style={styles.infoTitleMediumText}>Overview </Text>
            </View>

            <View style={styles.divider}/>

            <View style={styles.overviewListRow}>
                <Text style={styles.infoDetailsTextDark}>Address</Text>
                <Text style={styles.infoDetailsText}>{
                    accountDetails ? 
                    accountDetails.account : 
                    <ActivityIndicator size="small" color="rgba(0,0,0,0.2)" />
                }</Text>
            </View>    

            <View style={styles.overviewListRow}>
                <Text style={styles.infoDetailsTextDark}>Balance</Text>
                <Text style={
                    styles.infoDetailsText}>{accountDetails ? 
                        accountDetails.balance/1000000000000000000 + ' Ether' : 
                    <ActivityIndicator size="small" color="rgba(0,0,0,0.2)" />
                }</Text>
            </View>    
        </View>
    )
}

const styles = StyleSheet.create({

  
    infoTitleMediumText: {
      fontSize: 14,
      fontWeight: 'bold'
    },
  
    infoDetailsTextDark: {
      fontSize: 12,
      fontWeight: 'normal',
      color: 'black',
    },
  
    infoDetailsText: {
      width: 210,
      fontSize: 12,
      fontWeight: 'normal',
      textAlign: 'right',
      color: 'rgba(0,0,0,0.5)',
    },
  
    //divider
    divider: {
      alignSelf: 'stretch',
      height: 0.5,
      backgroundColor: "rgba(0,0,0,0.2)"
    },
  
    overviewContent: {
      backgroundColor: 'white',
      marginTop: 10,
    },
  
    overviewTitle: {
      padding: 12
    },
  
    overviewListRow: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 12,
      paddingVertical: 12,
      borderBottomWidth: 0.5,
      borderBottomColor: "rgba(0,0,0,0.2)"
    }
  
  });