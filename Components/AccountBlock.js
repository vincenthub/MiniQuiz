import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import { addressTransactionsEndpoint } from '../constants'

export const AccountBlock = () => {

    const [accountTrnx, setAccountTrnx] = useState(null)

    const getAddressCurrentBlock = async () => {
        try {
            let response = await fetch(addressTransactionsEndpoint);
            let jsonResult = await response.json()
            setAccountTrnx(jsonResult.result[0])
            console.log(jsonResult.result[0])
        } catch (error) {
            return {"error": error}
        }
    }      

    useEffect(() => {
       if(!accountTrnx) getAddressCurrentBlock()
    })

    return (
        <View style={styles.overviewContent}>
            <View style={styles.overviewTitle}>
            <Text style={styles.infoTitleMediumText}>Current Block Height </Text>
            </View>
            
            <View style={styles.divider}/>

            <View style={styles.overviewListRow}>
                <Text style={styles.infoDetailsTextDark}>Block Height:</Text>
                <Text style={styles.infoDetailsText}>{accountTrnx ? 
                        accountTrnx.blockNumber : 
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
      padding: 12,
    }
  
  });