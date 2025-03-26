pipeline {
    agent any  // Gunakan agent apapun yang tersedia

    environment {
        CHROME_DRIVER_PATH = 'src/main/resources/driver.exe'  // Path ke ChromeDriver
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/syahdaafia/web-testing-automation.git'
            }
        }

        stage('Setup Environment') {
            steps {
                script {
                    def mvnHome = tool name: 'Maven', type: 'maven'
                    env.PATH = "${mvnHome}/bin:${env.PATH}"
                }
            }
        }

        stage('Build & Run Tests') {
            steps {
                sh 'mvn clean test'
            }
        }

        stage('Publish Test Results') {
            steps {
                junit 'target/surefire-reports/*.xml'  // Report hasil pengujian
            }
        }
    }
}
