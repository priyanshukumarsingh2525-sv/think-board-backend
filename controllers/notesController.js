import Note from "../models/Note.js"


export async function getAllNotes (req,res){
     try {
        const notes = await Note.find().sort({createdAt: -1}) // newest first will sort in desc
        res.status(200).json(notes);

     } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message: "Internal server error"})
     }
}

export async function getNoteById (req,res) {
    try {
        const id = req.params.id;
        const note = await Note.findById(id);

        if(!note) return res.status(404).json({message:"Note not found"});

        res.status(200).json(note);
    } catch (error) {
         console.error("Error in getNoteById controller", error);
        res.status(500).json({message: "Internal server error"})
    }
}


export  async function createNote(req,res) {
   try {
    const {title,content} = req.body
    const note = new Note({title,content})

    const saveNote =  await note.save();

    res.status(200).json(saveNote)
   } catch (error) {
    console.error("Error in createNotes controller", error);
        res.status(500).json({message: "Internal server error"})
   }
}


export async function updateNote (req,res) {
   try {
    const id = req.params.id;
    const {title,content} = req.body;
    const updateNote = await Note.findByIdAndUpdate(id,{title,content},{new: true});

    if(!updateNote) return res.status(404).json({message:"Note not found"})

    res.status(201).json({message:"Note updated successfully"})
   } catch (error) {
    console.error("Error in updateNote controller", error);
        res.status(500).json({message: "Internal server error"})
   }
}

export async function deleteNote (req,res) {
    try {
        const id = req.params.id;
        const note = await  Note.findById(id);
        if(!note) return res.status(404).json({message:"Note not found"});

        await Note.findByIdAndDelete(id);
         res.status(201).json({message:"Note deleted successfully"})

    } catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({message: "Internal server error"})
    }
}