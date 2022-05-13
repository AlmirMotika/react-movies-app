const apiConfig={
    baseUrl:'https://api.themoviedb.org/3/',
    apiKey:'4cd6cba4a25e686b7fa3be20b40ec374',
    originalImage:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`

}
export default apiConfig;