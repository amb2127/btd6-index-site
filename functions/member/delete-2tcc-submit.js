import { handleDeleteSubmit } from "./handleDeleteSubmit";

export async function onRequestPost(context) {
    return handleDeleteSubmit({context, challenge: 'twotcc', fields: ['tower1', 'tower2', 'map'], joinFields: ['tower1', 'tower2']});
}