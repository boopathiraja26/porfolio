from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        # Arial bold 15
        self.set_font('Arial', 'B', 15)
        # Title
        self.cell(0, 10, 'BOOPATHIRAJA N', 0, 1, 'L')
        # Line break
        self.ln(5)

    def footer(self):
        pass

def create_resume():
    pdf = PDF()
    pdf.add_page()
    # Add Profile Photo
    try:
        pdf.image('for linkedin  profile.jpg', x=170, y=10, w=25)
    except Exception as e:
        print(f"Warning: Could not add profile photo. Error: {e}")

    pdf.set_auto_page_break(auto=True, margin=15)

    # Contact Info
    pdf.set_font('timesnewroman', '', 10)
    pdf.cell(0, 5, 'Phone : +91 9003726561', 0, 1)
    pdf.cell(0, 5, 'Email : boopathiraja26ab@gmail.com', 0, 1)
    pdf.cell(0, 5, 'LinkedIn : https://www.linkedin.com/in/boopathi-raja-306523392', 0, 1)
    pdf.cell(0, 5, 'Portfolio : https://boopathirajaportfolio.netlify.app', 0, 1)
    pdf.cell(0, 5, 'GitHub : https://github.com/boopathiraja26', 0, 1)
    
    pdf.ln(5)
    
    # Init Section Function
    def section_title(title):
        pdf.set_font('Arial', 'B', 12)
        pdf.set_text_color(0, 51, 102) # Dark Blue
        pdf.cell(0, 8, title, 0, 1, 'L')
        pdf.line(10, pdf.get_y(), 200, pdf.get_y())
        pdf.ln(2)
        pdf.set_text_color(0, 0, 0) # Reset to black

    # OBJECTIVE
    section_title('OBJECTIVE')
    pdf.set_font('Arial', '', 10)
    pdf.multi_cell(0, 5, 'Highly motivated Information Technology graduate seeking an entry-level position in a dynamic IT environment to apply strong foundational knowledge in programming, problem-solving, and Software Testing.')
    pdf.ln(5)

    # EDUCATION
    section_title('EDUCATION')
    pdf.set_font('Arial', 'B', 10)
    pdf.cell(140, 5, 'B.TECH INFORMATION TECHNOLOGY (CGPA UPTO 6TH SEM - 7.5)', 0, 0)
    pdf.cell(0, 5, '2022-2026', 0, 1, 'R')
    pdf.set_font('Arial', '', 10)
    pdf.cell(0, 5, 'J.K.K.Munirajah College Of Technology, T.N.Palayam', 0, 1)
    
    pdf.ln(2)
    
    pdf.set_font('Arial', 'B', 10)
    pdf.cell(140, 5, 'GOVT MODEL HR SEC SCHOOL MATHUR (HSC - 60%)', 0, 0)
    pdf.cell(0, 5, '2021-2022', 0, 1, 'R')
    
    pdf.ln(2)
    
    pdf.set_font('Arial', 'B', 10)
    pdf.cell(140, 5, 'GOVT MODEL HR SEC SCHOOL MATHUR (SSLC - 65%)', 0, 0)
    pdf.cell(0, 5, '2019-2020', 0, 1, 'R')
    pdf.ln(5)

    # TECHNICAL SKILLS
    section_title('TECHNICAL SKILLS')
    pdf.set_font('Arial', '', 10)
    pdf.cell(0, 5, 'Frontend: HTML, CSS, Tailwind CSS, JavaScript, React.js', 0, 1)
    pdf.cell(0, 5, 'Backend: Python', 0, 1)
    pdf.cell(0, 5, 'Database: PostgreSQL', 0, 1)
    pdf.cell(10, 5, '*', 0, 0)
    pdf.cell(0, 5, 'Tools: Git, GitHub', 0, 1)
    pdf.ln(5)

    # PROJECTS
    section_title('PROJECTS')
    
    pdf.set_font('Arial', 'B', 10)
    pdf.cell(0, 5, 'Camera based crowd analytics and objects detection', 0, 1)
    pdf.set_font('Arial', '', 10)
    pdf.multi_cell(0, 5, 'Developed a real-time vision system using Python and OpenCV to detect objects and analyze crowd density with high accuracy for monitoring and safety applications')
    pdf.ln(3)

    pdf.set_font('Arial', 'B', 10)
    pdf.cell(0, 5, 'Campus Core - Student Management System', 0, 1)
    pdf.set_font('Arial', '', 10)
    pdf.multi_cell(0, 5, 'Developed a full-stack web application with ASP.NET Web API backend and PostgreSQL database, integrated with a React.js frontend for managing student records and parent records efficiently.')
    pdf.ln(5)

    # INTERNSHIP
    section_title('INTERNSHIP')
    
    pdf.set_font('Arial', 'B', 10)
    pdf.cell(0, 5, 'Full Stack Web Development | Litz Technologies (2025)', 0, 1)
    pdf.set_font('Arial', '', 10)
    pdf.multi_cell(0, 5, 'Completed a 15-days Full Stack Web Development (July 2025) focused on front-end and full-stack web development using industry-standard tools and technologies')
    pdf.ln(3)

    pdf.set_font('Arial', 'B', 10)
    pdf.cell(0, 5, 'Nxt Gen Solution, Erode', 0, 1)
    pdf.set_font('Arial', '', 10)
    pdf.multi_cell(0, 5, 'Completed a 7-day internship in Internet of Things (IoT), learning sensor integration and microcontroller basics. Developed and tested simple IoT prototypes during the program.')
    pdf.ln(5)

    # DECLARATION
    section_title('DECLARATION')
    pdf.set_font('Arial', '', 10)
    pdf.multi_cell(0, 5, 'I hereby declare that all the information provided above is true and accurate to the best of my knowledge.')

    pdf.output('resume.pdf')

if __name__ == '__main__':
    create_resume()
