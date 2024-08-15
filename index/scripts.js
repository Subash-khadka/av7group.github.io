document.addEventListener('DOMContentLoaded', () => {
    const modalBtns = document.querySelectorAll('.modal-btn');
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const span = document.getElementsByClassName('close')[0];

    const memberContent = {
       "Subash Khadka": {
    cv: `<b><p>Subash Khadka is a bright and ambitious student from Nepal, currently studying in class 9 at Janata Secondary School. Born to parents Surya and Sabitra Khadka, he has always been encouraged to pursue his passions and dreams.</p>
         <p>With a particular admiration for Neymar, his favorite football player, Subash finds inspiration in his dedication and skill. He aspires to travel the world, explore new cultures, and bring back innovative ideas to contribute to the development of Nepal.</p>
         <p>Outside of school, Subash enjoys coding and reading, constantly seeking to expand his knowledge and abilities.</p>
         <p>Subash envisions a future where he can use his technical expertise and global experiences to make a meaningful impact on Nepal and its people.</p>
        <br><br>
        <br><br>
         <a href='file:///F:/project/cv/subash/index.html' class='cv-button' target='_blank'>View CV</a>`
},

"Krigash Ghimire": {
    cv: `<b><p>Krigash Ghimire is a bright and ambitious student from Nepal, currently studying in class 9. Born on 2067/07/09 to parents Tulasi Ram Ghimire and Sangita Rijal, Krigash is passionate about playing cricket, playing chess, and reading General Knowledge books. He has a keen interest in expanding his knowledge and is always eager to learn new things.</p>
         <p>Outside of academics, Krigash enjoys spending time on the cricket field and sharpening his strategic thinking through chess. With a love for learning and a drive to succeed, Krigash is set on making the most of his talents and interests.</p></b>
         <br><br>
         <br><br>
         <a href='file:///F:/project/cv/krigash/index.html' class='cv-button' target='_blank'>View CV</a>`
},

"Sak Sham Chaudhary": {
    cv: `<b>
<p>Sak Sham Chaudhary is a passionate and visionary student from Nepal, currently enrolled in class 9 at Janata Secondary School. His parents, Surya and Bimala Chaudhary, have always supported his ambitions, fostering his love for learning and exploration.</p>
<p>Inspired by the skills and dedication of Neymar, Sak Sham aspires to be a global citizen who not only explores diverse cultures but also brings back innovative ideas to propel Nepal's growth.</p>
<p>Beyond academics, Sak Sham has a deep love for football, where he hones his teamwork and leadership skills. He is committed to expanding his knowledge in every field he encounters.</p>
<p>Looking ahead, Sak Sham aims to blend his technical prowess with global experiences to make a significant contribution to the development of Nepal.</p>
</b>
<br><br>
         <a href='file:///F:/project/cv/Sak Sham Ch/index.html' class='cv-button' target='_blank'>View CV</a>`
},


"Subarna Shrestha": {
    cv: `<b>
<p>Subarna Shrestha is a creative and insightful student from Nepal, currently thriving in class 9 at Janata Secondary School. His natural curiosity and problem-solving abilities make him a standout student with a passion for learning.</p>
<p>With a deep admiration for Neymar’s discipline and creativity, Subarna is inspired to approach his own goals with the same level of dedication. He dreams of traveling the world, gathering knowledge, and applying it to bring positive change to Nepal.</p>
<p>Subarna’s interests in coding and reading demonstrate his commitment to expanding his intellectual horizons. He is always eager to learn new concepts and push the boundaries of what he knows.</p>
<p>In the future, Subarna aims to leverage his technical skills and the insights he gains from his global experiences to drive innovation and progress in Nepal.</p>
</b> <br><br>
         <br><br>
         <a href='file:///F:/project/cv/subarna/index.html' class='cv-button' target='_blank'>View CV</a>`
},

"Saugat Bhagat": {
    cv: `<b>
<p>Saugat Bhagat is a focused and determined student from Nepal, currently studying in class 9 at Janata Secondary School. His strong work ethic and passion for learning make him an exemplary student with a bright future.</p>
<p>Inspired by the visionary leadership of Kul Man Ghising, the managing director of Nepal Electricity Authority, who played a key role in ending the country’s chronic power shortages, Saugat is motivated to explore new cultures and bring back ideas that can contribute to Nepal’s development.</p>
<p>Beyond the classroom, Saugat has a keen interest in technology and enjoys exploring the world of coding. His love for reading further fuels his desire to continuously improve and broaden his knowledge base.</p>
<p>Saugat envisions using his technical knowledge and global experiences to create lasting change in Nepal, contributing to the country’s progress and innovation.</p>
</b><br><br>
         <br><br>
         <a href='file:///F:/project/cv/saugat/index.html' class='cv-button' target='_blank'>View CV</a>`
},

"Sujal Bhagat": {
    cv: `<b>
<p>Sujal Bhagat is an energetic and innovative student from Nepal, currently excelling in class 9 at Janata Secondary School. His enthusiasm for learning and his innovative spirit make him a standout student with limitless potential.</p>
<p>Inspired by Neymar’s creativity and determination, Sujal dreams of traveling the world, experiencing new cultures, and bringing back fresh ideas to help drive Nepal’s progress.</p>
<p>Sujal’s interests lie in the fields of technology and reading, where he constantly seeks to challenge himself and expand his understanding of the world.</p>
<p>He aims to use his technical expertise and the experiences he gains globally to make a significant impact on Nepal, fostering innovation and development for the betterment of his country.</p>
</b><br><br>
         <br><br>
         <a href='file:///F:/project/cv/sujal/index.html' class='cv-button' target='_blank'>View CV</a>`
},

"Amazon khadka": {
    cv: `<b>
<p>Amazon Khadka is a creative and dynamic student from Nepal, currently thriving in class 9 at Janata Secondary School. Raised by Padam and Susma Khadka, he has always been encouraged to pursue his interests and think outside the box.</p>
<p>Amazon admires Neymar for his agility and innovative play style on the football field. He dreams of traveling to new places, learning from different cultures, and bringing back fresh ideas to contribute to Nepal’s growth.</p>
<p>In addition to his academic pursuits, Amazon enjoys playing video games and football, where he channels his creativity and strategic thinking.</p>
<p>Amazon envisions using his technical knowledge and global experiences to make a significant impact in Nepal, driving innovation and positive change in his community.</p>
</b> <br><br>
         <br><br>
         <a href='file:///F:/project/cv/Amazon/index.html' class='cv-button' target='_blank'>View CV</a>`
},

        "Biographies": {
            cv: `
                <div style="display: flex; justify-content: center; gap: 30px; margin-bottom: 30px;">
                    <div style="text-align: center;">
                        <img src="E:/project/index/img/p1.png" alt="Biographies" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;">
                        <p style="margin-top: 10px; font-weight: bold; color: #333;"><a href="file:///path/to/biography1.html" style="color: #007BFF; text-decoration: none;">Person 1</a></p>
                    </div>
                    <div style="text-align: center;">
                        <img src="E:/project/index/img/p2.png" alt="Biographies" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;">
                        <p style="margin-top: 10px; font-weight: bold; color: #333;"><a href="file:///path/to/biography2.html" style="color: #007BFF; text-decoration: none;">Person 2</a></p>
                    </div>
                    <div style="text-align: center;">
                        <img src="E:/project/index/img/p3.png" alt="Biographies" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;">
                        <p style="margin-top: 10px; font-weight: bold; color: #333;"><a href="file:///path/to/biography3.html" style="color: #007BFF; text-decoration: none;">Person 3</a></p>
                    </div>
                </div><b><b>
                  <p>Biographies tell the stories of remarkable individuals who have left a significant impact on their fields and the world. Our approach to writing biographies ensures a compelling narrative that highlights their journey, challenges, and achievements.</p>
             <p>Each biography is crafted with meticulous research and attention to detail, capturing the essence of the individual’s life and legacy.</p>
             <p>Whether it's a historical figure or a modern-day icon, our biographies are designed to inspire and educate readers, offering insights into the lives of those who have shaped history.</p>
          <br><br></b>
                <a href="file:///path/to/member/cv.html" class="cv-button" target="_blank" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: white; border-radius: 5px; text-decoration: none; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); transition: background-color 0.3s ease;">View Biography</a>`
        },
        "Professional CVs": {
            cv: `<b>
                <div style="display: flex; justify-content: center; gap: 30px; margin-bottom: 30px;">
                    <div style="text-align: center;">
                        <img src="E:/project/index/img/p1.png" alt="Professional CVs Image 1" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;">
                        <p style="margin-top: 10px; font-weight: bold; color: #333;"><a href="file:///path/to/cv1.html" style="color: #007BFF; text-decoration: none;">CV 1</a></p>
                    </div>
                    <div style="text-align: center;">
                        <img src="E:/project/index/img/p2.png" alt="Professional CVs Image 2" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;">
                        <p style="margin-top: 10px; font-weight: bold; color: #333;"><a href="file:///path/to/cv2.html" style="color: #007BFF; text-decoration: none;">CV 2</a></p>
                    </div>
                    <div style="text-align: center;">
                        <img src="E:/project/index/img/p3.png" alt="Professional CVs Image 3" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;">
                        <p style="margin-top: 10px; font-weight: bold; color: #333;"><a href="file:///path/to/cv3.html" style="color: #007BFF; text-decoration: none;">CV 3</a></p>
                    </div>
                </div>
                <p>Professional CVs are crucial in today’s competitive job market, and we specialize in crafting resumes that stand out. Our team ensures that each CV is tailored to the individual's career goals, skills, and experiences.</p>
             <p>With a focus on clarity and professionalism, our CVs are designed to make a strong impression on potential employers, highlighting the candidate's strengths and achievements.</p>
             <p>We understand the importance of a well-structured and visually appealing CV, and we work closely with clients to create a document that reflects their unique qualifications and personality.</p>
             <br><br></b>
                <a href="file:///path/to/member/cv.html" class="cv-button" target="_blank" style="display: inline-block; padding: 10px 20px; background-color: #28A745; color: white; border-radius: 5px; text-decoration: none; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); transition: background-color 0.3s ease;">View CV</a>`
        },
        "Website Development": {
            cv: `<b>
                <div style="display: flex; justify-content: center; gap: 30px; margin-bottom: 30px;">
                    <div style="text-align: center;">
                        <img src="E:/project/index/img/p1.png" alt="Website Development Image 1" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;">
                        <p style="margin-top: 10px; font-weight: bold; color: #333;"><a href="file:///path/to/project1.html" style="color: #007BFF; text-decoration: none;">Project 1</a></p>
                    </div>
                    <div style="text-align: center;">
                        <img src="E:/project/index/img/p2.png" alt="Website Development Image 2" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;">
                        <p style="margin-top: 10px; font-weight: bold; color: #333;"><a href="file:///path/to/project2.html" style="color: #007BFF; text-decoration: none;">Project 2</a></p>
                    </div>
                    <div style="text-align: center;">
                        <img src="E:/project/index/img/p3.png" alt="Website Development Image 3" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;">
                        <p style="margin-top: 10px; font-weight: bold; color: #333;"><a href="file:///path/to/project3.html" style="color: #007BFF; text-decoration: none;">Project 3</a></p>
                    </div>
                </div>
                   <p>Website Development is at the heart of the digital age, and we specialize in creating websites that are not only visually stunning but also highly functional. Our team of developers works tirelessly to ensure that each website meets the needs of the client and their audience.</p>
             <p>From responsive design to seamless user experience, our websites are built to engage users and drive results. We stay up-to-date with the latest technologies and trends to deliver cutting-edge solutions.</p>
             <p>Whether you're looking to build a new website from scratch or redesign an existing one, our team is equipped to handle projects of all sizes and complexities.</p>
           <br><br></b>
                <a href="file:///path/to/member/cv.html" class="cv-button" target="_blank" style="display: inline-block; padding: 10px 20px; background-color: #FFC107; color: white; border-radius: 5px; text-decoration: none; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); transition: background-color 0.3s ease;">View Project</a>`
        },
          "Games": {
            cv: `<b>
                <div style="display: flex; justify-content: center; gap: 30px; margin-bottom: 30px;">
                    <div style="text-align: center;">
                        <img src="file:///F:/project/index/img/GAMES/1.PNG" alt="Website Development Image 1" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;">
                        <p style="margin-top: 10px; font-weight: bold; color: #333;"><a href="file:///F:/project/game/g1/index.html" style="color: #007BFF; text-decoration: none;">Rock-Paper-Scissors</a></p>
                    </div>
                    <div style="text-align: center;">
                        <img src="file:///F:/project/index/img/GAMES/2.PNG" alt="Website Development Image 2" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;">
                        <p style="margin-top: 10px; font-weight: bold; color: #333;"><a href="file:///F:/project/game/g2/index.html
" style="color: #007BFF; text-decoration: none;"> Tic Tac Toe </a></p>
                    </div>
                    <div style="text-align: center;">
                        <img src="file:///F:/project/index/img/GAMES/3.PNG" alt="Website Development Image 3" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;">
                        <p style="margin-top: 10px; font-weight: bold; color: #333;"><a href="file:///F:/project/game/g3/index.html" style="color: #007BFF; text-decoration: none;">2024</a></p>
                    </div>
                </div>
<P> TRY OURS GAMES</P>
                    <br><br></b>
               `
        }
    };

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const member = btn.dataset.member;
            const content = memberContent[member];

            modal.style.display = 'block';
            modalTitle.textContent = member;
            modalBody.innerHTML = content.cv;
        });
    });

    span.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
 
 // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
  