import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import theme from '../../theme';

interface UpcomingHolidaysProps{
    upcomingHolidays: any
}

const UpcomingHolidays: React.FC<UpcomingHolidaysProps> = ({upcomingHolidays}) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionHeading}>Upcoming Holidays</Text>

            <View style={styles.cardsContainer}>
            {upcomingHolidays.map((holiday: any) => {
                const [year, month, day] = holiday.date.split('-');
                const formattedDate = `${new Date(Number(year), Number(month) - 1, Number(day)).toLocaleString('en-US', {
                    month: 'long',
                })} ${Number(day)}, ${year}`;

                return (
                <Card key={holiday.id} style={styles.card}>
                    <Card.Content>
                    <Title style={{ color: 'white' }}>{holiday.holiday_name}</Title>
                    <Paragraph style={{ color: 'white' }}>{formattedDate}</Paragraph>
                    </Card.Content>
                </Card>
                );
            })}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 2,
        paddingTop: 12
    },
    sectionHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        marginBottom: 16,
        backgroundColor: theme.colors.activeTabColor
    },
});

export default UpcomingHolidays;
