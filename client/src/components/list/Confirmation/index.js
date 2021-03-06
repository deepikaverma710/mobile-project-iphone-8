import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import { formatPrice } from "../../../utility";

export default function Confirmation({
  //METHODS
  //PROPERTIES
  transaction,
  navigation,
  user,
  portfolioStats,
}) {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Image
          source={{ uri: transaction.company.image }}
          style={styles.image}
        />
        <Text style={{ ...styles.header, marginLeft: 7 }}>
          {transaction.company.name}
        </Text>
      </View>
      <Text style={styles.subHeader}>Transaction Complete!</Text>
      <Text style={styles.summary}>Summary</Text>
      <View style={styles.line}></View>
      <View style={styles.pair}>
        <Text style={styles.quantity}>Quantity </Text>
        <Text style={styles.quantity}>{transaction.quantity}</Text>
      </View>

      <View style={styles.pair}>
        <Text style={styles.marketPrice}>Market Price </Text>
        <Text style={styles.marketPrice}>
          {" "}
          $ {formatPrice(transaction.company.current_price.toFixed(2))}
        </Text>
      </View>

      <View style={styles.lineSecondary}></View>

      <View style={styles.pair}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>
          $ {formatPrice(transaction.bookValue.toFixed(2))}
        </Text>
      </View>

      <View style={styles.userStats}>
        <Text style={styles.statsHeader}>Portfolio</Text>
      </View>
      <View style={styles.line}></View>

      {portfolioStats ? (
        <View style={styles.userStats}>
          <Text style={styles.stats}>Number of Coins</Text>
          <Text style={styles.stats}> {portfolioStats.totalCoins} Coin(s)</Text>
        </View>
      ) : null}

      <View style={styles.userStats}>
        <Text style={styles.stats}>Wallet</Text>
        <Text style={styles.stats}>
          {!user.profileData.cash
            ? "0.00"
            : formatPrice(user.profileData.cash.toFixed(2))}
        </Text>
      </View>

      <View style={styles.userStats}>
        <Text style={styles.stats}>Portfolio Book Value</Text>
        <Text style={styles.stats}>
          {formatPrice(user.profileData.bookValue.toFixed(2))}
        </Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Index");
          }}
        >
          <Text style={styles.buttonText}>Back to Index</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    height: "100%",
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  main: {
    height: "100%",
  },
  header: {
    fontSize: 35,
    color: "white",
  },
  subHeader: {
    fontSize: 25,
    textAlign: "center",
    color: "white",

    paddingTop: 5,
    paddingBottom: 35,
  },
  summary: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
  quantity: {
    fontSize: 18,
    color: "white",
  },
  marketPrice: {
    fontSize: 18,
    color: "white",
  },
  total: {
    fontSize: 18,
    color: "white",
    paddingBottom: 40,

    borderTopColor: "red",
  },
  userStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  statsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  stats: {
    fontSize: 17,
    color: "white",
  },
  pair: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
  line: {
    paddingHorizontal: 50,
    borderTopWidth: 1.25,
    borderTopColor: "#3273ff",
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  lineSecondary: {
    paddingHorizontal: 50,
    borderTopWidth: 1.0,
    borderTopColor: "gray",
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  amount: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#0079ff",
    marginTop: 17,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    textAlign: "center",
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    paddingBottom: 20,
    width: "100%",
    paddingHorizontal: 50,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
});
