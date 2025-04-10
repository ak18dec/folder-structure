import { ChevronRightIcon, DocumentIcon, FolderIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
import "./App.css";
import { useState } from "react";

let folders = [
  {
    name: 'Home',
    folders: [
      {
        name: "Movies",
        folders: [
          {
            name: "Action",
            folders: [
              {
                name: "2000s",
                folders: [
                  {
                    name: 'Gladiator.mp4'
                  },
                  {
                    name: 'Avengers.mp4'
                  }
                ]
              },
              {
                name: "2010s",
                folders: []
              },
            ],
          },
          {
            name: "Comedy",
            folders: [
              {
                name: "2000s",
                folders: []
              }
            ]
          },
        ],
      },
      {
        name: "Music",
        folders: [
          {
            name: "Rock",
            folders: []
          },
          {
            name: "Classical",
            folders: []
          },
        ],
      },
      { name: "Pictures", folders: [] },
      { name: "Documents", folders: [] },
      { name: "password.txt"}
    ]
  }
];

function App() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul className="pl-6">
        {folders.map((folder) => (
          <Folder folder={folder} key={folder.name} />
        ))}
      </ul>
    </div>
  );
}

function Folder({folder}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <li className="my-1.5" key={folder.name}>
      <span className="flex items-center gap-1.5">
        {folder.folders && folder.folders.length > 0 && (<button onClick={()=> setIsOpen(!isOpen)}>
          <ChevronRightIcon className={`size-3 text-gray-500 ${isOpen ? 'rotate-90' : ''}`} />
        </button>)}
        { folder.folders ? 
          (
            isOpen ? 
              <FolderOpenIcon className={`size-6 text-sky-500 ${folder.folders.length === 0 ? 'ml-[17px]': ''}`} /> : 
              <FolderIcon className={`size-6 text-sky-500 ${folder.folders.length === 0 ? 'ml-[17px]': ''}`} />
          ) :
          <DocumentIcon className="ml-[17px] size-6 text-gray-900" />}
        
        {folder.name}
      </span>
      {isOpen && (
        <ul className="pl-6">
          {folder.folders?.map((folder) => (
            <Folder folder={folder} key={folder.name} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default App;
