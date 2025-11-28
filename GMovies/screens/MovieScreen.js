// GMovies/screens/MovieScreen.js
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { fetchMovieCredits, fetchMovieDetails, image500 } from '../api/moviedb';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';

var { width, height } = Dimensions.get('window');

export default function MovieScreen() {
    const { params: item } = useRoute();
    const [isFavorite, toggleFavorite] = useState(false);
    const [cast, setCast] = useState([]);
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        setLoading(true);
        getMovieDetails(item.id);
        getMovieCredits(item.id);
    }, [item])

    const getMovieDetails = async id => {
        const data = await fetchMovieDetails(id);
        if (data) setMovie(data);
        setLoading(false);
    }

    const getMovieCredits = async id => {
        const data = await fetchMovieCredits(id);
        if (data && data.cast) setCast(data.cast);
    }

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20, minHeight: '100%' }}
            className="flex-1 bg-neutral-900"
        >
            <View className="w-full">
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center p-4 pt-3"}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
                        <HeartIcon size="36" color={isFavorite ? theme.background : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <LinearGradient
                        colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                        style={{ width: width, height: height * 0.40 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0"
                    />
                    <Image
                        source={{ uri: image500(movie.poster_path) }}
                        style={{ width: width, height: height * 0.55 }}
                    />
                </View>
            </View>

            {/* movie details */}
            <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                {/* title */}
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {movie?.title}
                </Text>

                {/* status, release, runtime */}
                {movie?.id ? (
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        {movie?.status} • {movie?.release_date?.split('-')[0]} • {movie?.runtime} min
                    </Text>
                ) : null}

                {/* genres */}
                <View className="flex-row justify-center mx-4 space-x-2">
                    {movie?.genres?.map((genre, index) => {
                        let showDot = index + 1 != movie.genres.length;
                        return (
                            <Text key={index} className="text-neutral-400 font-semibold text-base text-center">
                                {genre?.name} {showDot ? "•" : null}
                            </Text>
                        )
                    })}
                </View>

                {/* description */}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    {movie?.overview}
                </Text>
            </View>

            {/* cast */}
            {cast.length > 0 && <Cast navigation={navigation} cast={cast} />}

        </ScrollView>
    )
}
