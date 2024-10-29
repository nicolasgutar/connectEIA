// File: app/index.tsx
import { Text, View, Image } from "react-native";
import MenuButton from "@/components/MenuButton";
import MenuButton2 from "@/components/MenuButton2";
import LogoUniversidad from "@/assets/images/LogoUniversidad.png";
import MenuButton3 from "@/components/MenuButton3";



export default function Index() {

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 20,
            }}
        >
            <View
                style={{
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 20,
                    }}
                >
                    <Image
                        source={LogoUniversidad}
                        style={{
                            width: 90,
                            height: 90,
                            marginRight: 10,
                            resizeMode: "contain",
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "bold",
                        }}
                    >
                        Connect EIA
                    </Text>
                </View>
                <MenuButton Title={"Eventos"} Redirect="/eventos" />
                <MenuButton Title="Reservas" Redirect="/reservas" />
                <MenuButton Title="Marketplace" Redirect="/marketplace" />
            </View>
            <View>
                <MenuButton3 Title="Login" Redirect="/login" />
                <MenuButton2 Title="Sobre ConnectEIA" Redirect="/sobre" />
            </View>
        </View>
    );
}