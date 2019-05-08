import { Dimensions } from "react-native";

const ScreenWidth = Dimensions.get("window").width;
export const BANNERS = {
  TOP: [
    'https://cdn.pixabay.com/photo/2015/11/04/09/28/banner-1022119__340.jpg',
    'https://cdn.wallpapersafari.com/48/16/TatqHJ.jpg',
    'https://www2.deloitte.com/content/dam/Deloitte/ca/Images/header_images/rebranded/ca-finance-forensic-topic-banner-1200X300.jpg',
  ],
  BOTTOM: [
    'https://i.pinimg.com/originals/80/00/a5/8000a53ee1c740b5db39e744525f9df2.jpg',
    'https://www.cenitouch.com/media/cenitouch-banner-background.jpg',
    'https://png.pngtree.com/thumb_back/fh260/back_pic/02/66/88/23578b9662d0b70.jpg',
  ],
  HEIGHT:60,
  WIDTH:ScreenWidth,
  TIMEOUT:5000,
  URL:'http://www.coralthemes.com/demo/coraldark/'
};

export const THEME = {
 BACKGROUNDCOLOR:'#36343D'
};