'use server';

export async function getSuburb(formData: FormData) {
 
  // Prepare data for insertion into the database
  const longitude  = formData.get('longitude');
  const latitude =  formData.get('latitude');
  

  // Call API location endpoint 
  try {
    
    const body = {
      longitude,
      latitude,
    }
    
    const request = new Request(``, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    const response = await fetch(request);
    if(!response.ok) {
      throw new Error("API Error: Failed to Get Location.");       
    }
  } catch (error) {
    return {
      message: 'API Error: Failed to Get Location.',
    };
  }
 
  //revalidatePath('');
  //redirect('');
}