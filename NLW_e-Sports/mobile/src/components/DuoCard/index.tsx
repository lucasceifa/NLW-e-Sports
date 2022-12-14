import { View,TouchableOpacity,Text } from 'react-native';
import { THEME } from '../../theme';
import { GameController } from 'phosphor-react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
	houStart: string;
	hourEnd: string;
	id: string;
	name: string;
	useVoiceChannel: boolean;
	weekDays: string[];
	yearsPlayint: number;
}

interface Props {
	data: DuoCardProps;
	onConnect: () => void;
}

export function DuoCard({data, onConnect}: Props) {


	return (
		<View style={styles.container}>
			<DuoInfo
				label='Nome'
				value={data.name}
			/>
			<DuoInfo
				label='Tempo de jogo'
				value={`${data.yearsPlayint} anos`}
			/>
			<DuoInfo
				label='Disponibilidade'
				value={`${data.weekDays.length} dias \u2022 ${data.houStart} - ${data.hourEnd}`}
			/>
			<DuoInfo
				label='Chamada de áudio'
				value={data.useVoiceChannel ? "Sim" : "Não"}
				colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={onConnect}
			>	
				<GameController
					color={THEME.COLORS.TEXT}
					size={20}
				/>
				<Text style={styles.buttonTitle}>
					Conectar
				</Text>
			</TouchableOpacity>
		</View>
	);
}