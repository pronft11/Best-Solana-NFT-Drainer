const collectionInfo = {
    name: "AOTUVERSE",
    title: "{name}", 
    date: "13.06.2022",
    socialMedia: {
        discord: "https://discord.gg/trippinapetribe",
        twitter: "https://twitter.com/TrippinApeNFT",
    },
    medias: {
        preview: "bj.jpeg",
	favicon: "logo.jpeg",
    },
    background: {
        type: "image",
        image: "gif.jpeg",
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 2,
    totalSupply: 100,
	toFixed: 0,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.3,
    maxTransfer: 10,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);
