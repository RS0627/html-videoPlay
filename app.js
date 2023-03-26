
document.addEventListener("DOMContentLoaded", function() {
    const myVideo = document.getElementById("myVideo");
    if (myVideo !== null) {
        // ビデオのメタデータが読み込まれたときに発生するloadedmetadataイベントのハンドラ
        myVideo.addEventListener("loadedmetadata", function() {
            console.log("ビデオの読み込みが完了しました。再生時間を監視します。");
            // timeupdateイベントのハンドラ
            myVideo.addEventListener("timeupdate", function() {
                console.log("現在の再生時間: " + myVideo.currentTime + "秒");
            });
        });
    }
});
