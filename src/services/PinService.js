const generateId = () => {
  return `${Math.floor(Math.random() * 100_000).toString(16)}-${Math.floor(
    Math.random() * 100_000
  ).toString(16)}`;
};

const saveFolders = async (folders) => {
  localStorage.setItem("folders", JSON.stringify(folders));
};

export const getFolders = async () => {
  return JSON.parse(localStorage.getItem("folders")) || [];
};

export const saveFolder = async (folderName) => {
  const folders = await getFolders();

  const newFolder = {
    id: generateId(),
    name: folderName,
    pins: [],
  };

  folders.push(newFolder);

  await saveFolders(folders);

  return newFolder;
};

export const savePinInFolder = async (folderId, pinId) => {
  const folders = await getFolders();

  const folderIndex = folders.findIndex(function (folder) {
    return folder.id === folderId;
  });

  if (folderIndex !== -1) {
    folders[folderIndex].pins.push(pinId);
  }

  await saveFolders(folders);

  return { ...folders[folderIndex] };
};

export const getPins = async () => {
  return [
    {
      id: "444",
      title: "Imagem",
      image: "https://picsum.photos/200/300?16",
      total: 0,
    },
    {
      id: "464",
      title: "Imagem",
      image: "https://picsum.photos/200/300?17",
      total: 0,
    },
    {
      id: "364",
      title: "Imagem",
      image: "https://picsum.photos/200/300?18",
      total: 0,
    },
    {
      id: "164",
      title: "Imagem",
      image: "https://picsum.photos/200/300?19",
      total: 0,
    },
    {
      id: "404",
      title: "Imagem",
      image: "https://picsum.photos/200/300?20",
      total: 0,
    },
    {
      id: "414",
      title: "Imagem",
      image: "https://picsum.photos/200/300?21",
      total: 0,
    },
    {
      id: "324",
      title: "Imagem",
      image: "https://picsum.photos/200/300?22",
      total: 0,
    },
    {
      id: "134",
      title: "Imagem",
      image: "https://picsum.photos/200/300?23",
      total: 0,
    },
  ];
};
