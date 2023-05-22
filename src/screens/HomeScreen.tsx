import { View, Dimensions } from 'react-native';
import Loader from '../ui/Loader/Loader';
import { useAppDispatch } from '../hooks/reduxHook';
import { useStyles } from '../hooks/useStyles';
import ChooseLang from '../components/ChooseLang';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { LAYOUT_BLOCK } = useStyles();

  return (
    <View>
      {false ? (
        <Loader />
      ) : (
        <>
          <ChooseLang />
          <View style={LAYOUT_BLOCK}></View>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
