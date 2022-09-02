import * as React from "react";
import { StyleSheet } from "react-nativescript";

type Cat = {
    id: string;
    url: string;
}

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

const fetchCat = async () => {
    const response = await fetch(CAT_API_URL);
    const serialized = await response.json();
    const [newCat] = serialized;
    return newCat;
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: "column",
        height: "100%",
    },
    imageCat: {
        borderRadius: 40,
        height: '93%',
        paddingLeft: 500,
        paddingRight: 500,
        width: '98%',
    },
    actionBar: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        height: 60,
        justifyContent: 'space-around',
        width: '90%',
    }
});

const HomeScreen: React.FC = () => {
    const [cat, setCat] = React.useState<Cat>();

    const updateCat = async () => {
        const cat = await fetchCat();
        setCat(cat);
    }

    React.useEffect(() => {
        updateCat();
    }, []);

    return (
        <flexboxLayout style={styles.container}>
                <label
                    text="CatFinder"
                    class="title-font"
                />
                {cat && (
                    <image
                        src={cat.url}
                        style={styles.imageCat}
                        stretch="aspectFill"
                    />
                )}
            <flexboxLayout style={styles.actionBar} marginTop={-100}>
                <image
                    onTap={updateCat}
                    src="~/assets/dislike.png"
                    stretch="none"
                />
                <image
                    onTap={updateCat}
                    src="~/assets/like.png"
                    stretch="none"
                />
            </flexboxLayout>
        </flexboxLayout>
    );
}

export default HomeScreen;
