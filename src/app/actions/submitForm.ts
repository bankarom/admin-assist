"use server";

export async function submitLeadForm(formData: FormData) {
  try {
    // The Contact Form 7 ID is 6 (based on post=6 in the WP admin URL)
    const formId = "6";
    const wpUrl = `http://wpadminassist.improxdcc.com/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

    // Contact Form 7 expects some hidden fields to work properly
    formData.append('_wpcf7', formId);
    formData.append('_wpcf7_version', '5.9.3');
    formData.append('_wpcf7_locale', 'en_US');
    formData.append('_wpcf7_unit_tag', `wpcf7-f${formId}-p1-o1`);
    formData.append('_wpcf7_container_post', '1');

    // Contact Form 7 natively accepts FormData!
    const response = await fetch(wpUrl, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.status === "mail_sent") {
      return { success: true, message: "Thank you for reaching out! We will be in touch shortly." };
    } else {
      console.error("CF7 Error:", result);
      return { success: false, message: result.message || "Failed to send message. Please try again." };
    }
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
