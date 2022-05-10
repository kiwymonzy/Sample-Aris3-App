import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home, Articles,MovieDetail } from "../screens"
import { COLORS, icons } from "../constants"

import { TabIcon } from "../components"

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: true,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.black,
                    borderTopColor: "transparent",
                    height: 80
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{                   
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                        />
                    ),
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen
                name="Academics"
                component={MovieDetail}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.academic}
                        />
                    ),
                    tabBarLabel: 'Academics'
                }}
            />
            <Tab.Screen
                name="Payment"
                component={MovieDetail}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.payment}
                        />
                    ),
                    tabBarLabel: 'Payment'
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Articles}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.profile}
                        />
                    ),
                    tabBarLabel: 'Profile'
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;