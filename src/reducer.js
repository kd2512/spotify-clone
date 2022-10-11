export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove below token initialization after debugging
  // token:
  //   "BQAlhtz4jtTy9l6YkhbnirHeuhrlXnW4Wjn-mO1FHCEKAgzqqhvo595VwDRFfapT4DZguFMaa-SAyyLjKvf7Y4fEvKQciqJ8smVTuTW2_Jg5MxJ3LGgbwPH4R9CheXT5K08bo-arGzlslG6U7HitkxxbBoJ_MpelKIeZkS2O1g31Ph5P3NxeSztnj4zrjHUFzteDQTv4-hW1oAHKad0y",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
