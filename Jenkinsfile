node {
   stage('Preparation') { 
      git 'https://github.com/TimGundmann/kirurgiskklinik.com.git'
   }
   stage("version update") {
   }
   stage('Build') {
     sh "w"
     sh "ps -aux | grep Xvfb"
     sh "export DISPLAY=:2"
     sh "npm install"
     wrap([$class: 'Xvfb', displayName: 2]) {
      sh "ng test --watch false"
     }
     sh "ng build --prod -aot"
   }
   stage('Results') {
   }
   stage('Docker Deploy') {
   }
}