desc "Deploy the site to S3"
task :deploy do
  system("s3cmd sync www/* s3://stretchcon.com/ --verbose")
end
