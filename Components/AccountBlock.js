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
        <View style={styles.blockContent}>
            <View style={styles.blockTitle}>
            <Text style={styles.infoTitleMediumText}>Current Block</Text>
            </View>
            
            <View style={styles.divider}/>

            <View style={styles.blockListRow}>
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
  
    blockContent: {
      backgroundColor: 'white',
      marginTop: 10,
    },
  
    blockTitle: {
      padding: 12
    },
  
    blockListRow: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(0,0,0,0.2)"
      }
  
  });